import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Message from '@/model/Message';

export async function GET() {
    try {
        await dbConnect(); // Connect to the database

        // Fetch all messages
        const messages = await Message.find({}).sort({ createdAt: -1 }); // Sort by createdAt in descending order

        return NextResponse.json({ success: true, data: messages }, { status: 200 });
    } catch (error) {
        console.error("Error fetching messages:", error);
        return NextResponse.json({ success: false, message: 'Failed to fetch messages' }, { status: 500 });
    }
}
