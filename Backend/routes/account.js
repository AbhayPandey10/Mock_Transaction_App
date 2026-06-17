import express from "express"
import {authMiddleware} from "../middleware.js"
import {User, Account} from "../database.js"

const router = express.Router();

app.get("/balance", authMiddleware, async (req,res)=>{
    const userId = req.userId;

    const account = await Account.findOne({
        userId
    })

    res.json({
        balance : account.balance
    })
})

export default router;

