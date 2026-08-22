import { SYSTEM_PROMPT } from './prompts';
import { getLLM } from './llm';
import { tools } from './tools';
import { retrieveKnowledge } from './retriever';
import {
  SystemMessage,
  HumanMessage,
  AIMessage,
  ToolMessage,
  BaseMessage,
} from '@langchain/core/messages';
import logger from '../logger';

export interface ChatMessageInput {
  role: 'user' | 'assistant';
  content: string;
}

export async function generateResponse(
  userQuery: string,
  chatHistory: ChatMessageInput[]
): Promise<string> {
  try {
    // 1. Perform semantic search to retrieve RAG context
    logger.info(`Retrieving knowledge context for query: "${userQuery}"`);
    const relevantChunks = await retrieveKnowledge(userQuery, 5);
    
    const contextText = relevantChunks.length > 0
      ? relevantChunks.map(chunk => `[Source: ${chunk.metadata.source}]\n${chunk.content}`).join('\n\n')
      : 'No specific document context found.';

    // 2. Prepare the system prompt with context
    const systemInstruction = SYSTEM_PROMPT.replace('{context}', contextText);

    // 3. Format history and messages
    const messages: BaseMessage[] = [new SystemMessage(systemInstruction)];

    for (const msg of chatHistory) {
      if (msg.role === 'user') {
        messages.push(new HumanMessage(msg.content));
      } else {
        messages.push(new AIMessage(msg.content));
      }
    }

    // Add current user message
    messages.push(new HumanMessage(userQuery));

    // 4. Bind tools to LLM
    const modelWithTools = getLLM().bindTools(tools);

    // 5. Invoke LLM for initial turn
    logger.info('Calling Groq LLM (initial turn)...');
    const response = await modelWithTools.invoke(messages);

    // 6. Check for tool calls
    if (response.tool_calls && response.tool_calls.length > 0) {
      logger.info(`LLM requested tool calls: ${JSON.stringify(response.tool_calls)}`);
      
      // Add the LLM response containing the tool call requests to the message history
      messages.push(response);

      // Execute each tool requested
      for (const toolCall of response.tool_calls) {
        const selectedTool = tools.find(t => t.name === toolCall.name);
        if (!selectedTool) {
          logger.error(`Requested tool "${toolCall.name}" not found.`);
          messages.push(
            new ToolMessage({
              content: `Error: Tool ${toolCall.name} not found.`,
              tool_call_id: toolCall.id!,
            })
          );
          continue;
        }

        try {
          logger.info(`Executing tool: ${toolCall.name} with args: ${JSON.stringify(toolCall.args)}`);
          const toolResult = await selectedTool.invoke(toolCall.args);
          
          messages.push(
            new ToolMessage({
              content: toolResult,
              tool_call_id: toolCall.id!,
            })
          );
        } catch (toolError) {
          logger.error(`Error executing tool "${toolCall.name}":`, toolError);
          messages.push(
            new ToolMessage({
              content: `Error executing tool: ${toolError instanceof Error ? toolError.message : String(toolError)}`,
              tool_call_id: toolCall.id!,
            })
          );
        }
      }

      // Invoke LLM again with tool results
      logger.info('Calling Groq LLM with tool outputs...');
      const finalResponse = await modelWithTools.invoke(messages);
      return String(finalResponse.content);
    }

    return String(response.content);
  } catch (error) {
    logger.error('Error during RAG response generation:', error);
    return "I'm sorry, I encountered an internal error while trying to process your request. Please try again or reach out to Nikhil directly at nkdasar@gmail.com.";
  }
}
