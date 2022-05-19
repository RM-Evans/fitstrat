import './NewWorkout.css'
import Form from 'react-bootstrap/Form'
import { useFormik } from 'formik'

export default function NewWorkout() {

  const formik = useFormik({
    initialValues: {
      nameOfWorkout: '',
    },
  })

  console.log('form values', formik.values)

  return (
    <div className="new-workout-container">
      {/* <p>there should be a form on this page</p> */}
      <Form>
        <Form.Group controlId="formBasicEmail" className="formMain">
          <Form.Label>Workout Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Back and Bi, Leg Day, etc..."
            name="nameOfWorkout"
            onChange={formik.handleChange}
            value={formik.values.nameOfWorkout}
          />
        </Form.Group>
      </Form>
    </div>
  )
}
