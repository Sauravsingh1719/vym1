import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Message from '@/model/Message'; 
import { messageSchema } from '@/schemas/messageSchema';
import { z } from 'zod';

export async function POST(req: Request) {
    try {
        await dbConnect();

        const body = await req.json(); 
        const parsedData = messageSchema.parse(body); 

        // Create a new message document
        const newMessage = await Message.create(parsedData);

        return NextResponse.json({ success: true, message: 'Message posted successfully', data: newMessage }, { status: 201 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            // Handle Zod validation errors
            return NextResponse.json({ success: false, message: error.errors }, { status: 400 });
        }

        console.error("Error posting message:", error);
        return NextResponse.json({ success: false, message: 'Failed to post message' }, { status: 500 });
    }
}
