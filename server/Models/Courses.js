import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const courseSchema = new Schema({
  name: {
    type:String,
    required:true,
    max:20
  },
  units:{
    type:Number,
  }
});

const Course = model('Course', courseSchema);
export default Course;