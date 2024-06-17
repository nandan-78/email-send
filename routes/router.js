import express from 'express';
import nodemailer from 'nodemailer' ;

const router = express.Router() ;

//email send ---> method

router.post("/register" , (req , res) =>{
    // console.log(req.body);

    const {email} = req.body ;

    try {
        const transporter = nodemailer.createTransport({
            service:"gmail" ,
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD
                
            }
        });

        const mailOptions = {
            from: process.env.EMAIL ,
            to: email,
            subject:"Sending email with React and NodeJs" ,
            html:"<h1> Congratulation email send successfully </h1>"
        };

        transporter.sendMail(mailOptions , (err , info) =>{

            if(err){
                console.log("Error occured", err);
            }else{
                console.log(`Email sent ${info.response}`);
                res.status(201).json({status:201 , info})
            }
        })
        
    } catch (error) {
        res.status(401).json({status:401 , err})
        
    }
})

export default router ;