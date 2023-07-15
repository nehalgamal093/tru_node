let mode = 'prod';

export const globalErrorMiddleware =(err,req,res,next) =>{

if(mode == 'dev'){
    const devMode = (err,res)=>{
        let code = err.statusCode || 500;
        res.status(code).json({statusCode:code,message:err.message,stack:err.stack})

    }
} else {
    let code = err.statusCode || 500;
    res.status(code).json({statusCode:code,message:err.message})
}
}