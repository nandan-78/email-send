import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
function Home() {

    const [email , setEmail] = useState("");
    // console.log(email);

    const [show , setShow] = useState(false);

    const sendEmail = async(e) =>{
        e.preventDefault() ;

        const res = await fetch("/register" , {
            method:"Post" ,
            headers:{
                "Content-Type" : "application/json"
            } ,
            body:JSON.stringify({
                email
            })   
            
        });
        // console.log(res);
        const data = await res.json() ;

        if(data == 401 || !data){
            console.log("Error");
        }else{
            console.log("Email sent");

            setShow(true);

            setEmail("") // to empty the enter field 
        }
    }

  return (
   <>
   {
    show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                    Your Email Succesfully Send
                </Alert> : ""
   }
    <div className="container mt-2">
        <div className='d-flex justify-content-center'>
            <h2>Send Email with React & NodeJs</h2>
            <img src="/gmail.png" alt="gmail photo" className='mx-3' style={{width: "50px"}} />
        </div>
        
        <div className='d-flex justify-content-center'>
        <Form className='mt-2 col-lg-6'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your email address</Form.Label>
        <Form.Control type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        
      </Form.Group>

     
      <Button variant="primary" type="submit" onClick={sendEmail}>
        Send
      </Button>
    </Form>
        </div>
    </div>
   </>
  )
}

export default Home;