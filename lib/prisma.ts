import { PrismaClient, Prisma } from '@prisma/client';
import logger from './logger';

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

const prisma = globalForPrisma.prisma ?? (() => {
  logger.info('Initializing Prisma Client...');
  const client = new PrismaClient({
    log: [
      {
        emit: 'event',
        level: 'query',
      },
      {
        emit: 'event',
        level: 'error',
      },
      {
        emit: 'event',
        level: 'info',
      },
      {
        emit: 'event',
        level: 'warn',
      },
    ],
  });

  client.$on('query', (e: any) => {
    logger.info(`Prisma Query: ${e.query} ${e.params}`);
  });

  client.$on('info', (e: any) => {
    logger.info(`Prisma Info: ${e.message}`);
  });

  client.$on('warn', (e: any) => {
    logger.warn(`Prisma Warn: ${e.message}`);
  });

  client.$on('error', (e: any) => {
    logger.error(`Prisma Error: ${e.message}`, e.target);
  });

  return client;
})();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Explicitly connect to the database and log status
async function connectToDatabase() {
  logger.info('Attempting to connect to the database...');
  try {
    await prisma.$connect();
    logger.info('Database connected successfully.');
  } catch (error) {
    logger.error('Database connection failed:', error);
    throw error; 
  }
}

// Connect only once when the module is loaded if not already connected
if (!globalForPrisma.prisma) {
  connectToDatabase().catch(err => {
    logger.error('Unhandled database connection error during module load:', err);
  });
}

export { prisma };
export default prisma; 