import mongoose from 'mongoose';

var Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: { type: ObjectId, ref: 'Category' }
});

productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// productSchema.virtual('categoryName').get(function(){
//     return this.category.name;
// });

// Ensure virtual fields are serialised.
productSchema.set('toJSON', {
    virtuals: true
});

let Product = mongoose.model('Product', productSchema);
export { Product, productSchema }