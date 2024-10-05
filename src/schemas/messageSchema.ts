import * as z from 'zod';

// Define the user schema with validation rules
export const messageSchema = z.object({
  name: z.string().min(3, "Username must be at least 3 characters"),
  message: z.string().min(20, "Message must be at least 20 characters").max(500, "Message can't exceed 500 characters"),
});
