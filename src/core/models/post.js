import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
  subject: String,
  text: String,
  images: [String],
  date: {
    type: Date,
    default: new Date()
  }
});


export default mongoose.model('Post', postSchema);
