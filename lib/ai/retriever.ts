import { getVectorStore } from './vectorStore';

export interface RetrievedDocument {
  content: string;
  metadata: {
    source: string;
    type: string;
    category?: string;
    section?: string;
    [key: string]: any;
  };
}

export async function retrieveKnowledge(
  query: string,
  limit?: number
): Promise<RetrievedDocument[]> {
  const vectorStore = await getVectorStore();
  const topK = limit || parseInt(process.env.RAG_TOP_K || '5', 10);
  
  const results = await vectorStore.similaritySearch(query, topK);
  
  return results.map((doc) => ({
    content: doc.pageContent,
    metadata: doc.metadata as RetrievedDocument['metadata'],
  }));
}
