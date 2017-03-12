import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  post: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    },
  subject: String,
  text: String,
  images: [String]
});


export default mongoose.model('Comment', postSchema);
