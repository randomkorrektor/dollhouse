import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    pictures: [String],
    price: { type: Number, required: true }
});


export default mongoose.model('Product', productSchema);
