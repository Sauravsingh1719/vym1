import { Schema, model, models } from 'mongoose';

const MessageSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    minlength: [20, "Message must be at least 20 characters long"],
    maxlength: [500, "Message cannot exceed 500 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = models.Message || model('Message', MessageSchema);
export default Message;
