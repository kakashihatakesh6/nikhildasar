import { NextResponse } from 'next/server';
import logger from '@/lib/logger';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    logger.warn(`404 Not Found: ${url}`);
    return NextResponse.json({ success: true, message: '404 logged' });
  } catch (error) {
    logger.error('Error logging 404 from API route:', { error, requestBody: await request.text().catch(() => 'N/A') });
    return NextResponse.json({ success: false, message: 'Failed to log 404' }, { status: 500 });
  }
}
