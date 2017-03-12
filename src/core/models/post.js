import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  subject: String,
  text: String,
  images: [String]
});


export default mongoose.model('Post', postSchema);
