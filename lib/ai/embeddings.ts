import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';

let embeddingsInstance: any = null;

export function getEmbeddings(): any {
  if (embeddingsInstance) return embeddingsInstance;

  const provider = process.env.EMBEDDING_PROVIDER || 'google';

  if (provider === 'google') {
    const apiKey = process.env.GEMINI_API_KEY || process.env.EMBEDDING_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY or EMBEDDING_API_KEY is not defined in environment variables for Google GenAI embeddings');
    }
    
    embeddingsInstance = new GoogleGenerativeAIEmbeddings({
      apiKey,
      modelName: 'gemini-embedding-001', // 3072 dimensions
    });
  } else if (provider === 'openai') {
    const apiKey = process.env.EMBEDDING_API_KEY;
    if (!apiKey) {
      throw new Error('EMBEDDING_API_KEY is not defined in environment variables for OpenAI embeddings');
    }
    
    try {
      const { OpenAIEmbeddings } = require('@langchain/openai');
      embeddingsInstance = new OpenAIEmbeddings({
        apiKey,
        modelName: process.env.EMBEDDING_MODEL || 'text-embedding-3-small', // 1536 dimensions
      });
    } catch (err) {
      throw new Error('Please install @langchain/openai to use OpenAI embeddings');
    }
  } else {
    throw new Error(`Unsupported embedding provider: ${provider}`);
  }

  return embeddingsInstance;
}
