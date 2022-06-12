import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useFormik } from 'formik'
import { db, auth } from '../../../firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import '../UserLoginSignup.css'

export default function Login() {
  const [errorMessage, setErrorMessage] = useState('')
  const formik = useFormik({
    initialValues: {
      signUpEmail: '',
      signUpPassword: '',
    },
    onSubmit: (values) => {
      // this.event.preventDefault()

      // alert(JSON.stringify(values, null, 2))
      // alert(JSON.stringify(db, null, 2))
      let signUpEmail = values.signUpEmail
      let signUpPassword = values.signUpPassword

      createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((userCredential) => {
          // Signed in
          console.log(signUpEmail)
          const user = userCredential.user
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode)

          if (errorCode === 'auth/email-already-in-use') {
            setErrorMessage('email already in use')
          }

          // if invalid email, then "email is invalid!"
          // if email already in use, "an account with this email already exists!"
          // setErrorMessage(errorMessage)
        })
    },
  })

  // console.log('hey, listen', db)
  // console.log('form values', formik.values)

  return (
    <div className="signup-container">
      <Form onSubmit={formik.handleSubmit} className="login-form">
        <Form.Group controlId="formBasicEmail" className="form-group">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control
            className="form-input-field"
            type="email"
            placeholder="Email"
            name="signUpEmail"
            onChange={formik.handleChange}
            value={formik.values.signUpEmail}
          />
          <Form.Text>{errorMessage}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="form-group">
          <Form.Label className="form-label">Password</Form.Label>
          <Form.Control
            className="form-input-field"
            type="password"
            placeholder="Password"
            name="signUpPassword"
            onChange={formik.handleChange}
            value={formik.values.signUpPassword}
          />
        </Form.Group>
        <Button type="submit" className="submit-btn">
          Login
        </Button>
      </Form>
      <p className="looking-for-other-form">
        Don't have an account? <Link to="/signup">Create an account. </Link>
      </p>

      {/* <p>forgot your password?</p> */}
    </div>
  )
}
