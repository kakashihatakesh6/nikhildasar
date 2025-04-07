import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { MongoClient, ServerApiVersion } from 'mongodb';

export async function GET() {
  try {
    // Get client IP address from headers - Vercel specific headers first
    const headersList = headers();
    
    // Try multiple header sources that Vercel might use
    let clientIp = headersList.get('x-real-ip') || 
                  headersList.get('x-forwarded-for') || 
                  headersList.get('cf-connecting-ip') || // Cloudflare
                  '';
    
    const testip = headersList.get('x-real-ip');
    const testip2 = headersList.get('cf-connecting-ip');
    console.log("headersList =>", testip, testip2)
    // If x-forwarded-for has multiple IPs, get the first one
    if (clientIp && clientIp.includes(',')) {
      clientIp = clientIp.split(',')[0].trim();
    }
    
    // Default fallback
    if (!clientIp) {
      clientIp = '127.0.0.1';
    }
    
    console.log("Client IP =>", clientIp);
    
    // Get connection string from environment variables
    const uri = process.env.DATABASE_URL || '';
    
    if (!uri) {
      console.error('DATABASE_URL environment variable is missing');
      return NextResponse.json({ 
        success: false, 
        message: 'Database configuration error' 
      }, { status: 500 });
    }
    
    try {
      // Connect to MongoDB with modern options
      const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      
      await client.connect();
      const database = client.db();
      const visitorCollection = database.collection('Visitor');
      
      // Create a new visitor document
      await visitorCollection.insertOne({
        ipAddress: clientIp === '::1' ? '127.0.0.1' : clientIp,
        country: 'Unknown', // Simplified without geoip
        city: 'Unknown',    // Simplified without geoip
        visitedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        environment: process.env.NODE_ENV || 'unknown', // Track environment
        userAgent: headersList.get('user-agent') || 'unknown'
      });
      
      await client.close();
      
      return NextResponse.json({ 
        success: true, 
        message: 'Visitor tracked successfully',
        data: { ip: clientIp }
      });
    } catch (dbError) {
      console.error('Database operation failed:', dbError);
      return NextResponse.json({ 
        success: false, 
        message: 'Database operation failed' 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error tracking visitor:', error);
    if (error instanceof Error) {
      console.error(`Error name: ${error.name}, message: ${error.message}`);
    }
    
    return NextResponse.json({ 
      success: false, 
      message: 'Server error' 
    }, { status: 500 });
  }
} 