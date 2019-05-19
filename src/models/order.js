import mongoose from 'mongoose';
import { productSchema } from '../models/product.js';

var Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderLineSchema = new Schema({
    product: productSchema,
    quantity: Number
});

const orderSchema = new Schema({
    customerName: String,
    address: String,
    city: Number,
    state: Number,
    country: Number,
    zipCode: Number,
    shipped: Boolean,
    //lines:[{ type: ObjectId, ref: 'OrderLine' }]
    lines: [orderLineSchema]
});

let Order = mongoose.model('Order', orderSchema);
export default Order