import express from "express"
import mongoose from "mongoose"
import {authMiddleware} from "../middleware.js"
import {User, Account} from "../database.js"

const router = express.Router();

router.get("/balance", authMiddleware, async (req,res)=>{
    const userId = req.userId;

    const account = await Account.findOne({
        userId
    })

    res.json({
        balance : account.balance
    })
})

export default router;


router.post("/transfer", authMiddleware, async (req,res)=>{
    const session = await mongoose.startSession()

    session.startTransaction();
    const {to,amount} = req.body;

    const fromAccount = await Account.findOne({userId : req.userId}).session(session)

    if(!fromAccount || fromAccount.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            msg : "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({userId : to}).session(session)

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            msg : "Invalid Account"
        })
    }


    await Account.updateOne({userId : req.userId}, { $inc : {balance : -amount} }).session(session)
    await Account.updateOne({userId : to}, { $inc : {balance : amount} }).session(session)

    await session.commitTransaction();
    await session.endSession();
    
    res.json({
        msg : "Transaction Successful"
    })

})

