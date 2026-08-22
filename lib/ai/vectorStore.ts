import { MongoDBAtlasVectorSearch } from '@langchain/mongodb';
import { connectToDatabase } from '../mongodb';
import { getEmbeddings } from './embeddings';

const collectionName = 'knowledge_chunks';
const indexName = process.env.MONGODB_VECTOR_INDEX || 'vector_index';

export async function getVectorStore(): Promise<MongoDBAtlasVectorSearch> {
  const { client, db } = await connectToDatabase();
  const collection = db.collection(collectionName);
  
  // Mock collection.db.client to satisfy `@langchain/mongodb` constructor expectations.
  // We also mock client.appendMetadata if it is not present on the connection.
  const mockedClient = Object.create(client);
  if (typeof mockedClient.appendMetadata !== 'function') {
    mockedClient.appendMetadata = () => {};
  }
  
  const mockedDb = {
    client: mockedClient
  };

  Object.defineProperty(collection, 'db', {
    value: mockedDb,
    writable: true,
    configurable: true
  });
  
  return new MongoDBAtlasVectorSearch(getEmbeddings(), {
    collection: collection as any, // Cast to any to resolve package version type mismatch
    indexName,
    textKey: 'content', // match the document content property
    embeddingKey: 'embedding', // match the document embedding property
  });
}
