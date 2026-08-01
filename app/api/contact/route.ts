import { NextRequest, NextResponse } from 'next/server';
import { isRateLimited } from '@/lib/rateLimiter';
import { validateContactInput } from '@/lib/validation';
import { verifyTurnstileToken } from '@/lib/turnstile';
import { sendContactEmail } from '@/lib/resend';
import logger from '@/lib/logger';

export async function POST(request: NextRequest) {
  // 1. Extract IP Address from headers
  const xForwardedFor = request.headers.get('x-forwarded-for');
  let clientIp = '127.0.0.1';
  if (xForwardedFor) {
    clientIp = xForwardedFor.split(',')[0].trim();
  } else {
    const xRealIp = request.headers.get('x-real-ip');
    if (xRealIp) {
      clientIp = xRealIp.trim();
    }
  }

  // Normalize IPv6 local loopback
  if (clientIp === '::1' || clientIp === '::ffff:127.0.0.1') {
    clientIp = '127.0.0.1';
  }

  // 2. Enforce rate limit (5 requests per 10 minutes)
  if (isRateLimited(clientIp, 5, 10 * 60 * 1000)) {
    logger.warn(`Rate limit exceeded for contact form submission from IP: ${clientIp}`);
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please try again after 10 minutes.' },
      { status: 429 }
    );
  }

  // 3. Parse and validate JSON input
  let body: any;
  try {
    body = await request.json();
  } catch (err) {
    logger.error('Invalid JSON request payload in contact submission:', err);
    return NextResponse.json(
      { success: false, error: 'Invalid request payload. Must be valid JSON.' },
      { status: 400 }
    );
  }

  // 4. Validate fields on the server
  const { isValid, errors, data } = validateContactInput(body);
  if (!isValid || !data) {
    logger.warn(`Validation failed for submission from IP ${clientIp}: ${JSON.stringify(errors)}`);
    return NextResponse.json(
      { success: false, error: errors ? errors.join(' ') : 'Invalid form fields.' },
      { status: 400 }
    );
  }

  // 5. Verify Turnstile token
  const token = body.turnstileToken;
  if (!token) {
    logger.warn(`Turnstile security token is missing from IP: ${clientIp}`);
    return NextResponse.json(
      { success: false, error: 'Security verification is missing. Please refresh the page and try again.' },
      { status: 400 }
    );
  }

  const isHuman = await verifyTurnstileToken(token, clientIp);
  if (!isHuman) {
    logger.warn(`Turnstile token verification failed for IP: ${clientIp}`);
    return NextResponse.json(
      { success: false, error: 'Security check failed. Please solve the captcha again.' },
      { status: 400 }
    );
  }

  // 6. Send email notification via Resend
  try {
    const { name, email, message } = data;
    const emailResult = await sendContactEmail({ name, email, message, ipAddress: clientIp });

    if (emailResult.error) {
      logger.error('Resend API returned an error:', emailResult.error);
      return NextResponse.json(
        { success: false, error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    logger.info(`Successfully sent contact email from ${email} (IP: ${clientIp}). Email ID: ${emailResult.data?.id}`);
    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error: any) {
    logger.error('Unexpected error in contact API route:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'An unexpected server error occurred.' },
      { status: 500 }
    );
  }
}
