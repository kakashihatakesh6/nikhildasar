import { NextRequest, NextResponse } from 'next/server';
import { generateResponse } from '@/lib/ai/rag';
import logger from '@/lib/logger';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history } = body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        { success: false, error: 'Message is required and must be a non-empty string.' },
        { status: 400 }
      );
    }

    const validatedHistory = Array.isArray(history) ? history : [];

    // Simple validation of history format
    for (const msg of validatedHistory) {
      if (!msg || typeof msg !== 'object' || !msg.role || !msg.content) {
        return NextResponse.json(
          { success: false, error: 'Invalid chat history format.' },
          { status: 400 }
        );
      }
      if (msg.role !== 'user' && msg.role !== 'assistant') {
        return NextResponse.json(
          { success: false, error: 'Chat history roles must be either "user" or "assistant".' },
          { status: 400 }
        );
      }
    }

    logger.info(`Received chat request: "${message}"`);
    const aiResponse = await generateResponse(message, validatedHistory);

    return NextResponse.json({
      success: true,
      response: aiResponse,
    });
  } catch (error) {
    logger.error('Error in chat API route:', error);
    
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
