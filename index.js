process.on('uncaughtException',(err)=>{
    console.log('error',err)
})

import express from 'express';
import { dbConnection } from './databases/dbConnection.js';
import userRouter from './src/modules/users/user.router.js';
import msgRouter from './src/modules/messages/message.router.js';
import { AppError } from './src/utils/AppErr.js';
import { globalErrorMiddleware } from './src/utils/globalErrMiddleware.js';
const app = express();
const port = 3000;
app.use(express.json())
app.use('/users',userRouter)
app.use('/messages',msgRouter)
app.get('/',(req,res)=> res.send('Hello world'))
app.use('*',(req,res,next)=>{
    // res.json({message:'invalid url - cant access this endpoint'+req.originalUrl})
    next(new AppError("invalid url - cant access this endpoint'+req.originalUrl",404))
})
app.use(globalErrorMiddleware)
  
dbConnection();
app.listen(port,()=>console.log(`Connected port ${port}`))