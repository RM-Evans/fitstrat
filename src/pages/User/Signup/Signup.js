import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik'
import { db } from '../../../firestore';


export default function Signup() {

  const formik = useFormik({
    initialValues: {
      signUpEmail: '',
      signUpPassword: ''
    },
    onSubmit: values => {
      let ref1 = db.database().ref().child('users').push()
      let key = ref1.key
      values.id = key
      ref1.set(values)
    //  alert(JSON.stringify(values, null, 2));
    },
  })
  console.log("hey, listen", db)
  console.log('form values', formik.values)

  return (
    <div className="signup-container">
      <p>Signup Pagereeee</p>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formBasicEmail" className='formMain'>
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email"
            name="signUpEmail"
            onChange={formik.handleChange}
            value={formik.values.signUpEmail}
            />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className='formMain'>
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password"
           placeholder="Password"
           name="signUpPassword"
           onChange={formik.handleChange}
           value={formik.values.signUpPassword}
            />
        </Form.Group>
        <Button type="submit" variant="outline-primary">Signup</Button>

      </Form>

      
      </div>
  )
}

