import React from 'react'
import Form from 'react-bootstrap/Form';


export default function Signup() {
  return (
    <div className="signup-container">
      <p>Signup Pagereeee</p>
      <Form >
        <Form.Group controlId="formBasicEmail" className='formMain'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className='formMain'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
      </div>
  )
}

