import mongoose, { Schema } from 'mongoose';

const userSessionSchema = new Schema({
  user: {
      type: Schema.Types.ObjectId,
      ref: 'Story'
    }
});


export default mongoose.model('UserSession', userSessionSchema);
