import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const accountSchema = mongoose.Schema({
  email: String,
  password: String
});

accountSchema.plugin(passportLocalMongoose);
let Account = mongoose.model('Account', accountSchema);

export default Account;
