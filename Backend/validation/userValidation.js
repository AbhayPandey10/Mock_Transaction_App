 import {z} from "zod";

 export const userValidSchema = z.object({
    username : z.string(),
    firstName : z.string(),
    lastName : z.string(),
    password : z.string()
 })

 export const updateUserSchema = z.object({
   firstName : z.string().optional(),
   lastName : z.string().optional(),
   password : z.string().optional()
 })