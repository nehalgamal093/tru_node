import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        minLength:[2,'name too short'],
        maxLength:[15,'name too long'],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true]
    },
    password:{
        type:String,
        minLength:[2,'Password too short'],
        required:true
    },
    age:{
        type:Number,
        min:10,
        max:80
    },
    confirmedEmail:{
        type:Boolean,
        default:false
    }
})

export const userModel = mongoose.model('user',userSchema)