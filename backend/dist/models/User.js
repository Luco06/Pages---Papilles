import mongoose, { Schema } from 'mongoose';
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mdp: { type: String, required: true },
});
export const User = mongoose.model('User', UserSchema);
