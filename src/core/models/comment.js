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
  text: String,
  images: [String],
  date: {
    type: Date,
    default: new Date()
  }
});


export default mongoose.model('Comment', postSchema);
