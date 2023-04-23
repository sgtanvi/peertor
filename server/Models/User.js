import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type:String,
    required:true,
    max:20
  },
  email: {
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String, 
    required:true
  },
  studentPoints:{
    type:Number,
    default:0
  }, 
  courses:
    [{
      type:Schema.Types.ObjectId,
    }], 
    default:[] 
});


const User = model('User', userSchema);
export default User;