import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config({
     path: "../.env"
});

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


const accountSchema = new mongoose.Schema({
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type: Number,
        required: true
    }
})
export const User = mongoose.model("User",userSchema)
export const Account = mongoose.model("Account",accountSchema)