import express from "express";
import User from "../models/User.js";
import Course from "../Models/Courses.js";

const router = express.Router();

// student will be able to add their classes
router.post("/students/classes/add",async (req,res) =>{
    const newCourse = new Course({
        name:req.body.name,
        units:req.body.units
    })
    const studentID = req.body.studentID;

    try { 
        const user = await User.findById(studentID);
        const savedCourse = await newCourse.save();
        
        if ( user._id === req.body.studentID )
        {
            const updatedCourseList = await user.updateOne({
                $push : {courses : newCourse}     
            })
        }
        res.status(200).json(user);
    }catch{
        res.status(500).json("Couldn't add courses");
    }
})


