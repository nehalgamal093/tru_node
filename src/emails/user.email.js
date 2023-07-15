import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';


export const sendEmail = async (options) =>{
    
let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"n@gmail.com",
        pass:"odkdlddl",
    },

});
var token = jwt.sign({email:options.email},'NehalGamal2')
let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <n@gmail.com>', // sender address
    to: options.email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    // html: html(token), // html body
    html: "<b>Hello world?</b>", // html body
  });
  console.log(info);
}

