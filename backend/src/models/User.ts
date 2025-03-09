import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  mdp: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mdp: { type: String, required: true},
});

export const User = mongoose.model<IUser>('User', UserSchema);
