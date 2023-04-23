import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const meetingSchema = new Schema({
  title: {
    type:String,
    required:true,
  },
  studentId: {
    type:Schema.Types.ObjectId,
    unique:true
  },
  mentorId: {
    type:Schema.Types.ObjectId,
    unique:true
  },
  date:{
    type:Date,
  }
});

const Meeting = model('Meetings', courseSchema);
export default Meeting;