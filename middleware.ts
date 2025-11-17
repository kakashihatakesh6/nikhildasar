import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = await NextResponse.next();

  if (response.status === 404) {
    // Log 404s via a dedicated API route
    // Using an internal fetch to avoid blocking the middleware response
    fetch(`${request.nextUrl.origin}/api/log-404`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: request.url }),
    }).catch((err) => console.error('Failed to log 404 via API route:', err));
  }

  return response;
}
