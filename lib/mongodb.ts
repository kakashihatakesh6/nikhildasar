import { MongoClient, Db } from 'mongodb';
import logger from './logger';

let client: MongoClient;
let db: Db;

// Use a global variable to preserve connection across hot-reloads in development
let globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

async function getMongoClient(): Promise<MongoClient> {
  const uri = process.env.DATABASE_URL || '';
  if (!uri) {
    throw new Error('DATABASE_URL is not defined in environment variables');
  }
  if (process.env.NODE_ENV === 'development') {
    if (!globalWithMongo._mongoClientPromise) {
      logger.info('Initializing MongoClient in development mode...');
      client = new MongoClient(uri);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    return globalWithMongo._mongoClientPromise;
  } else {
    logger.info('Initializing MongoClient in production mode...');
    client = new MongoClient(uri);
    return client.connect();
  }
}

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  try {
    const mongoClient = await getMongoClient();
    const mongoDb = mongoClient.db();
    return { client: mongoClient, db: mongoDb };
  } catch (error) {
    logger.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}
