import express from "express"
import { userValidSchema, updateUserSchema } from "../validation/userValidation.js"
import { User } from "../database.js"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config.js"
import { authMiddleware } from "../middleware.js"

const userRouter = express.Router()

userRouter.post("/Signup", async (req,res)=>{
    const result = userValidSchema.safeParse(req.body);

    if(!result.success){
        return res.status(411).json({
            errors : result.error
        })
    }

    const user = await User.findOne({
        username : req.body.username
    })

    if(user){
        return res.status(411).json({
            msg : "Username not available"
        })
    }

    const newUser = await User.create(req.body);

    const token = jwt.sign({
        userId : newUser._id
    }, JWT_SECRET);

    res.json({
        msg : "User created successfully",
        token : token
    })

})



userRouter.put("/", authMiddleware, async (req,res)=>{
    const {success} = updateUserSchema.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            msg : "Invalid inputs"
        })
    }

    const updatedUser = await User.findByIdAndUpdate(
        req.userId,
        req.body,
        {new : true}
    )

    res.json({
        msg : "Updated Successfully",
        updatedUser
    })
})

export default userRouter;