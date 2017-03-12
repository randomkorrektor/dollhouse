import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  product: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    },
  subject: String,
  text: String,
  images: [String],
  date: {
    type: Date,
    default: new Date()
  }
});


export default mongoose.model('ProductComment', postSchema);
