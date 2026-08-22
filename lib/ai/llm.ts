import { ChatGroq } from '@langchain/groq';

let llmInstance: ChatGroq | null = null;

export function getLLM(): ChatGroq {
  if (llmInstance) return llmInstance;

  const apiKey = process.env.GROQ_API_KEY;
  const modelName = process.env.GROQ_MODEL || 'llama-3.1-8b-instant';

  if (!apiKey) {
    throw new Error('GROQ_API_KEY is not defined in environment variables');
  }

  llmInstance = new ChatGroq({
    apiKey,
    model: modelName, // use model instead of modelName
    temperature: 0.1, // low temperature for factual accuracy
  });

  return llmInstance;
}
