import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    admin: { type: Boolean, default: false },
    address: String,
    picture: String
});


export default mongoose.model('User', userSchema);
