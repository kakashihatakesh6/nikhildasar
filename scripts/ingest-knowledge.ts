import fs from 'fs';
import path from 'path';
const pdf = require('pdf-parse');
import { connectToDatabase } from '../lib/mongodb';
import { getEmbeddings } from '../lib/ai/embeddings';
import logger from '../lib/logger';

// Self-contained utility to load environment variables from .env manually
function loadEnv() {
  const envPath = path.join(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    for (const line of envContent.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const index = trimmed.indexOf('=');
      if (index === -1) continue;
      const key = trimmed.substring(0, index).trim();
      let val = trimmed.substring(index + 1).trim();
      // Strip outer quotes if present
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
      process.env[key] = val;
    }
    logger.info('.env file loaded manually in ingestion script.');
  }
}

// Custom Recursive Character Splitter function
function chunkText(text: string, chunkSize: number = 800, overlap: number = 200): string[] {
  const paragraphs = text.split(/\n\n+/);
  const chunks: string[] = [];
  let currentChunk = '';
  
  for (const paragraph of paragraphs) {
    const trimmed = paragraph.trim();
    if (!trimmed) continue;
    
    if ((currentChunk + '\n\n' + trimmed).length <= chunkSize) {
      currentChunk = currentChunk ? currentChunk + '\n\n' + trimmed : trimmed;
    } else {
      if (currentChunk) chunks.push(currentChunk);
      
      if (trimmed.length > chunkSize) {
        let start = 0;
        while (start < trimmed.length) {
          chunks.push(trimmed.slice(start, start + chunkSize));
          start += chunkSize - overlap;
        }
        currentChunk = '';
      } else {
        currentChunk = trimmed;
      }
    }
  }
  
  if (currentChunk) {
    chunks.push(currentChunk);
  }
  return chunks;
}

async function main() {
  try {
    loadEnv();
    
    const knowledgeDir = path.join(process.cwd(), 'knowledge');
    if (!fs.existsSync(knowledgeDir)) {
      logger.error('Knowledge directory does not exist! Please create it and add knowledge files.');
      process.exit(1);
    }

    const { db } = await connectToDatabase();
    const collection = db.collection('knowledge_chunks');

    const files = fs.readdirSync(knowledgeDir);
    logger.info(`Found files to ingest: ${files.join(', ')}`);

    for (const file of files) {
      const filePath = path.join(knowledgeDir, file);
      const ext = path.extname(file).toLowerCase();
      let text = '';
      let fileType = '';

      if (ext === '.pdf') {
        const fileBuffer = fs.readFileSync(filePath);
        const pdfData = await pdf(fileBuffer);
        text = pdfData.text;
        fileType = 'resume';
      } else if (ext === '.md' || ext === '.txt') {
        text = fs.readFileSync(filePath, 'utf8');
        fileType = file.includes('project') ? 'projects' : 'portfolio';
      } else {
        logger.warn(`Skipping unsupported file type: ${file}`);
        continue;
      }

      if (!text.trim()) {
        logger.warn(`File is empty, skipping: ${file}`);
        continue;
      }

      logger.info(`Splitting document "${file}" into chunks...`);
      const chunks = chunkText(text, 1000, 200);
      logger.info(`Generated ${chunks.length} chunks for "${file}"`);

      // Delete old chunks for this source to ensure idempotency
      logger.info(`Clearing existing database records for source: ${file}`);
      await collection.deleteMany({ 'metadata.source': file });

      // Generate embeddings and save to MongoDB
      const documentsToInsert = [];
      for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        logger.info(`Generating embedding for chunk ${i + 1}/${chunks.length} of "${file}"...`);
        
        try {
          const embedding = await getEmbeddings().embedQuery(chunk);
          
          documentsToInsert.push({
            content: chunk,
            embedding: embedding,
            metadata: {
              source: file,
              type: fileType,
              chunkIndex: i,
              createdAt: new Date()
            }
          });
        } catch (embedError) {
          logger.error(`Failed to generate embedding for chunk ${i}:`, embedError);
        }
      }

      if (documentsToInsert.length > 0) {
        logger.info(`Inserting ${documentsToInsert.length} documents into knowledge_chunks collection...`);
        const result = await collection.insertMany(documentsToInsert);
        logger.info(`Successfully ingested ${result.insertedCount} chunks from "${file}"`);
      }
    }

    logger.info('Knowledge base ingestion completed successfully!');
    process.exit(0);
  } catch (error) {
    logger.error('Fatal error during knowledge ingestion:', error);
    process.exit(1);
  }
}

main();
