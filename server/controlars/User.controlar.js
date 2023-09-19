const createError=require('http-errors');

const emailWithNODEmail = require("../Email/SMTPgmail");



const recevMail=async(req,res,next)=>{
    try {
        const {fastName,lastName,email,message,phone}=req.body;

const sendMail={
    email:'tashohag1@gmail.com', // list of receivers
    subject: `${fastName} ${lastName} is wating for you.!`, // Subject line
    html:`
    <h2>Hello Shoahg.</h2>
    <h3>${message}</h3> 
    
    
    
    <h4>My detail:</h4>
    <h5>Email:${email}</h5>
    <h5>Phone:${phone}</h5>
    
    
    `, // html body
  }

try {
  await  emailWithNODEmail(sendMail)
} catch (error) {
    next(createError(500,'faile to send varification email'))
    return
}





return res.status(200).send({
    success:true,
    message: 'email successfull',

})
    } catch (error) {

        next(error)
    }
}


    

module.exports={
   
    recevMail
}