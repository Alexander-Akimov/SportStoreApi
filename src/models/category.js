import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const categorySchema = new mongoose.Schema({
    name: String,
    description: String   

});

categorySchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
categorySchema.set('toJSON', {
    virtuals: true
});

let Category = mongoose.model('Category', categorySchema);
export default Category