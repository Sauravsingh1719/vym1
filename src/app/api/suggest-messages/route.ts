import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

// Initialize Gemini AI model
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const prompt = 
      "Create one positive and uplifting message suitable for an anonymous social messaging platform. The messages should encourage users to express themselves and share their thoughts in a friendly manner. For example, your output should be structured like this: 'Remember, every day is a fresh start!'.";
    
    const result = await model.generateContent(prompt);

    return NextResponse.json({
      success: true,
      messages: result.response.text(), // Gemini AI's generated text
    }, { status: 200 });
  } catch (error) {
    console.error('Error generating content with Gemini AI:', error);

    return NextResponse.json({
      success: false,
      message: 'Failed to generate response',
    }, { status: 500 });
  }
}
