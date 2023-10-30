import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: String, required: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  likes: { type: Number, required: false },
  comments: { type: Array, required: false },
});

export interface Post extends mongoose.Document {
  id: string;
  title: string;
  body: string;
  date: string;
  user: string;
  likes: number;
  comments: [];
}
