import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function GET() {
  try {
    const uri = process.env.DATABASE_URL || '';
    const client = new MongoClient(uri);
    
    await client.connect();
    const database = client.db();
    const visitorCollection = database.collection('Visitor');
    
    // Get only the total visitor count
    const totalVisitors = await visitorCollection.countDocuments();
    
    await client.close();

    return NextResponse.json({
      success: true,
      totalVisitors
    });
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    
    if (error instanceof Error) {
      console.error(`Error name: ${error.name}, message: ${error.message}`);
    }
    
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch visitor count',
      totalVisitors: 0
    });
  }
} 