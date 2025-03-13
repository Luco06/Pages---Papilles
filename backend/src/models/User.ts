import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IUser extends Document {
  nom: string;
  prenom: string;
  email: string,
  mdp: string;
  avatar:string;
  inscriptionDate: Date;
  recettes?: Types.ObjectId[],
}

const UserSchema: Schema = new Schema({
  nom: { type: String, required: true },
  prenom: {type: String, required: true},
  email: { type: String, required: true },
  mdp: { type: String, required: true},
  avatar: String,
  inscriptionDate: {type: Date, default: Date.now},
  recettes: [{ type: Schema.Types.ObjectId, ref: "Recette" }] 
});

export const User = mongoose.model<IUser>('User', UserSchema);
