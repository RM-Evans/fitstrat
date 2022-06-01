import './NewWorkout.css'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

export default function NewWorkout() {
  const [dropdownTitle, setDropdownTitle] = useState('Activity Type')
  const changeValue = (e) => {
    console.log(e)
    setDropdownTitle(e)
  }
  return (
    <div className="new-workout-container">
      {/* <p>there should be a form on this page</p> */}
      <Form>
        <Form.Group controlId="workoutTitle" className="workout-form-group">
          <Form.Label>Workout Title</Form.Label>
          <Form.Control placeholder="Workout Title" />
        </Form.Group>

        {/* adding an exercise will add a button to the array of exercises */}
        <Button variant="primary" id="add-exercise-btn">
          Add Exercise +
        </Button>
        {/* I should be able to create and delete as many of these forms as I want */}

        <div className="new-exercise-form">
          <Form.Group className="workout-form-group">
            <Form.Label>Exercise Name</Form.Label>
            <Form.Control placeholder="Exercise Name" />
          </Form.Group>

          <DropdownButton
            id="dropdown-basic-btn"
            className="workout-form-group"
            title={dropdownTitle}
            size="md"
          >
            <Dropdown.Item onClick={(e) => changeValue(e.target.textContent)}>
              Warmup
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => changeValue(e.target.textContent)}>
              Working Set
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => changeValue(e.target.textContent)}>
              Stretch
            </Dropdown.Item>
          </DropdownButton>

          <div className="sets-reps-group">
            <Form.Group className="sets-reps-item">
              <Form.Label>Sets</Form.Label>
              <Form.Control type="number" placeholder="Sets" />
            </Form.Group>
            <Form.Group className="sets-reps-item">
              <Form.Label>Reps</Form.Label>
              <Form.Control type="number" placeholder="Reps" />
            </Form.Group>
          </div>
          <Form.Group className="workout-form-group">
            <Form.Label>Notes</Form.Label>
            <Form.Control placeholder="Notes" />
          </Form.Group>
        </div>

        <Button variant="primary" className="save-workout-btn">
          Save Workout
        </Button>
      </Form>
    </div>
  )
}
