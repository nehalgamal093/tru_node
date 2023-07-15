import { userModel } from "../../../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { sendEmail } from "../../emails/user.email.js";
import { catchError } from "../../utils/catchAsyncErr.js";
import { AppError } from "../../utils/AppErr.js";



export const signup =catchError(
  async (req, res) => {

    const { name, email, password, age } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
      res.json({ message: "Email already in use" });
    } else {
      const hash = bcrypt.hashSync(password, 8);
      await userModel.insertMany({ name, email, password: hash, age });
      sendEmail({email})
      res.status(200).json({ message: "Success" });
    }
   
  }
)


export const verify =catchError(
  async (req,res)=>{
    const {token} = req.params;
    jwt.verify(token,'NehalGamal2',async (err,decoded)=>{
      if(err) return res.json(err)
      await userModel.findOneAndUpdate({email:decoded.email},{confirmedEmail:true})
      res.status(200).json({message:"Success"})
    })
  
  }
)


export const signIn = catchError(
  async (req, res,next) => {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email });
  
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return next(new AppError('incorrect email or password',400))
    }
    user.password = undefined;  
    var token = jwt.sign({user},process.env.JWT_KEY)
    res.status(200).json({ message: "login", token });
  }
)
