import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config({
     path: "../.env"
});

console.log(process.env.MONGO_URL)

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected Successfully");
    })
    .catch((err)=>{
        console.log(err);
    });

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

export const User = mongoose.model("User",userSchema)