import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.USERNAME_ID}:${process.env.PASSWORD_USER}@cluster0.kgfxb.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Mongo db was connected ")
}).catch((err) => {
    console.log(err);
})



app.listen(8800,() => {
    console.log("The app is running");
})