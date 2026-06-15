import jwt from "jsonwebtoken"
import {JWT_SECRET} from "./config.js"

export const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({
            msg : "No token provided"
        });
    }

    const token = authHeader.split(" ")[1]
    try{
        const decoded = jwt.verify(token, JWT_SECRET);

        if(decoded.userId){
            req.userId = decoded.userId;
            next(); 
        }else{
            return res.status(401).json({
                msg : "Invalid user"
            })
        }

        next();
    }catch(err){
        res.status(401).json({
            msg : "Invalid token"
        });
    }
}