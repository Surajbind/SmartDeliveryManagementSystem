import mongoose, { Schema, Document } from 'mongoose';

export interface IAssignment extends Document {
  orderId: string;
  partnerId: string;
  assignmentTime: Date;
  completionTime?: Date;
  status: 'pending' | 'completed' | 'cancelled';
}

const AssignmentSchema: Schema = new Schema({
  orderId: { type: String, required: true },
  partnerId: { type: String, required: true },
  assignmentTime: { type: Date, default: Date.now },
  completionTime: { type: Date },
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
});

export default mongoose.model<IAssignment>('Assignment', AssignmentSchema);
