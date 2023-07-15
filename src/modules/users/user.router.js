import express from 'express'
import { signIn, signup, verify } from "./user.controller.js";



const userRouter = express.Router();

userRouter.post('/signup',signup)
userRouter.post('/signin',signIn)
userRouter.get('/verify/:token',verify)
export default userRouter