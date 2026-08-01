interface RateLimitData {
  count: number;
  resetTime: number;
}

// Global in-memory cache for IP records (cached at the module-level)
const rateLimitMap = new Map<string, RateLimitData>();

export function isRateLimited(
  ip: string,
  limit: number = 5,
  windowMs: number = 10 * 60 * 1000 // 10 minutes default
): boolean {
  const now = Date.now();

  // Periodic memory leak prevention: prune expired records when cache grows
  if (rateLimitMap.size > 10000) {
    rateLimitMap.forEach((value, key) => {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    });
  }

  const clientData = rateLimitMap.get(ip);

  if (!clientData) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    });
    return false;
  }

  // If window has passed, reset the client's rate limit window
  if (now > clientData.resetTime) {
    clientData.count = 1;
    clientData.resetTime = now + windowMs;
    return false;
  }

  // Increment count and check limit
  clientData.count += 1;
  return clientData.count > limit;
}
