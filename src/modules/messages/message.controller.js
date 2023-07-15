import { messageModel } from "../../../models/message.model.js";
import { catchError } from "../../utils/catchAsyncErr.js";


export const addMessage = catchError(
    async (req,res) =>{
        const {message, receivedId} = req.body;
        await messageModel.insertMany({message,receivedId})
        res.json({message:'success'})
    }
)

export const getMsgs = catchError(
    async (req,res) =>{
        const  id = req.userId;
       let messages = await messageModel.find({receivedId:id})
        res.json({message:'success',messages})
    }
)

export const deleteMsgs = catchError(
    async (req,res) =>{
        const {id} = req.body;
       let deleted = await messageModel.find({id})
        res.json({message:'success',deleted})
    }
)