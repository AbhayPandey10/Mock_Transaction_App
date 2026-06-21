import express from "express"
import { userValidSchema, updateUserSchema, signinSchema } from "../validation/userValidation.js"
import { User, Account } from "../database.js"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config.js"
import { authMiddleware } from "../middleware.js"

const router = express.Router()

router.post("/Signup", async (req,res)=>{
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

    const userId = newUser._id;

    const newAccount = await Account.create({
        userId,
        balance : 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId : newUser._id
    }, JWT_SECRET);

    res.json({
        msg : "User created successfully",
        token : token
    })

})


router.post("/Signin", async (req,res)=>{
    const { success } = signinSchema.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message : "Error while logging in"
        })
    }

    const user = await User.findOne({
        username : req.body.username,
        password : req.body.password
    })

    if(!user){
        return res.status(411).json({
            message : "Error while logging in"
        })
    }

    const token = jwt.sign({
        userId : user._id
    },JWT_SECRET);

    res.json({
        token : token
    })
})


router.put("/", authMiddleware, async (req,res)=>{
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


router.get("/getRoute", authMiddleware, async (req,res)=>{
    const search = req.query.search || ""

    const users = await User.find({
        $or : [
            {firstName : {$regex : search, $options : "i"}},
            {lastName : {$regex : search, $options : "i"}}
        ]
    })

    if (users.length === 0){
        return res.status(404).json({
            msg : "No users found"
        })
    }else{
        return res.json({
            "users" : users.map((user)=> ({
                    username : user.username,
                    firstName : user.firstName,
                    lastName : user.lastName,
                    _id : user._id
                })
            )
        })
    }
})

export default router;