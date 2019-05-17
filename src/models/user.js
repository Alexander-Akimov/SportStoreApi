import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarName: String,
  avatarColor: String,
});

let User = mongoose.model('User', userSchema);
export default User;

