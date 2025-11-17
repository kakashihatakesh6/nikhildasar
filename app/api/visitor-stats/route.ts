import { NextResponse } from 'next/server';
import { MongoClient, Document } from 'mongodb';
import logger from '@/lib/logger';

// Define types to avoid TypeScript errors
type CountryData = {
  country: string;
  _count: { ipAddress: number };
};

type CityData = {
  city: string;
  _count: { ipAddress: number };
};

type VisitorData = {
  ipAddress: string;
  country: string;
  city: string;
  visitedAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

export async function GET() {
  try {
    const uri = process.env.DATABASE_URL || '';
    const client = new MongoClient(uri);
    
    await client.connect();
    const database = client.db();
    const visitorCollection = database.collection('Visitor');
    
    // Get total visitor count
    let totalVisitors = 0;
    try {
      totalVisitors = await visitorCollection.countDocuments();
    } catch (countError) {
      logger.error('Error counting visitors:', countError);
    }

    // Initialize arrays with proper types
    let visitorsByCountry: CountryData[] = [];
    let visitorsByCity: CityData[] = [];
    let recentVisitors: VisitorData[] = [];

    try {
      // Get visitors by country
      const countryCursor = await visitorCollection.aggregate([
        { $group: { _id: '$country', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 10 }
      ]);
      
      const countryResults = await countryCursor.toArray();
      visitorsByCountry = countryResults.map(doc => ({
        country: doc._id || 'Unknown',
        _count: { ipAddress: doc.count }
      }));
      
      // Get visitors by city
      const cityCursor = await visitorCollection.aggregate([
        { $group: { _id: '$city', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 10 }
      ]);
      
      const cityResults = await cityCursor.toArray();
      visitorsByCity = cityResults.map(doc => ({
        city: doc._id || 'Unknown',
        _count: { ipAddress: doc.count }
      }));
      
      // Get recent visitors
      const recentCursor = await visitorCollection.find()
        .sort({ visitedAt: -1 })
        .limit(5);
      
      const rawRecents = await recentCursor.toArray();
      
      // Safely cast documents to our expected format
      recentVisitors = rawRecents.map(doc => ({
        ipAddress: doc.ipAddress || '',
        country: doc.country || 'Unknown',
        city: doc.city || 'Unknown',
        visitedAt: doc.visitedAt || new Date(),
        createdAt: doc.createdAt || new Date(),
        updatedAt: doc.updatedAt || new Date()
      })) as VisitorData[];
    } catch (aggregationError) {
      logger.error('Error processing visitor data:', aggregationError);
    }

    await client.close();

    return NextResponse.json({
      success: true,
      stats: {
        totalVisitors,
        visitorsByCountry,
        visitorsByCity,
        recentVisitors,
      }
    });
  } catch (error) {
    logger.error('Error fetching visitor stats:', error);
    
    // Log more details about the error
    if (error instanceof Error) {
      logger.error(`Error name: ${error.name}, message: ${error.message}`);
    }
    
    // Return a fallback response with empty stats to prevent UI errors
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch visitor statistics',
      stats: {
        totalVisitors: 0,
        visitorsByCountry: [],
        visitorsByCity: [],
        recentVisitors: [],
      }
    });
  }
} 