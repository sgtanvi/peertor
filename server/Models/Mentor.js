import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const mentorSchema = new Schema({
  userId: {
    type:Schema.Types.ObjectId,
    unique:true
  },
  rating: {
    type:String,
    maxLength:3
  },
  mentorPoints:{
    type:Number,
    default:0
  }
});

const mentor = model('Mentor', mentorSchema);
export default mentor;