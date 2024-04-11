import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function FormTextExample() {
   const [email, setEmail]=useState('');
   const [passm setPass]=useState("");

   const handleEmail=(event)=> {
    setEmail(event.target.value);
   }
   const handlePass=(event)=> {
    setPass(event.target. value);
   }
  return (
    <>      
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>  
    </>
  );
}

export default FormTextExample;