import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useFormik } from 'formik'
import { db } from '../../../firestore'
import './Signup.css'

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      signUpEmail: '',
      signUpPassword: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      alert(JSON.stringify(db, null, 2))

      db.collection('users').doc().set(
        values
        // {s
        // name: 'name',
        // email: 'email',
        // comment: 'comment',
        // }
      )

      // let ref1 = db.database().ref().child('users').push()
      // let key = ref1.key
      // values.id = key
      // ref1.set(values)
      // console.log(ref1.key)
    },
  })

  // console.log('hey, listen', db)
  // console.log('form values', formik.values)

  return (
    <div className="signup-container">
      <Form onSubmit={formik.handleSubmit} className="signup-form">
        <Form.Group controlId="formBasicEmail" className="signup-form-group">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control
            className="form-input-field"
            type="email"
            placeholder="Email"
            name="signUpEmail"
            onChange={formik.handleChange}
            value={formik.values.signUpEmail}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="signup-form-group">
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
        <Button type="submit" className="signup-submit-btn">
          Signup
        </Button>
      </Form>
    </div>
  )
}
