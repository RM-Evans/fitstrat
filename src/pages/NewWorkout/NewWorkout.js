import './NewWorkout.css';
import Form from 'react-bootstrap/Form';

export default function NewWorkout() {
  return (
    <div className="new-workout-container">
      {/* <p>there should be a form on this page</p> */}
      <Form >
        <Form.Group controlId="formBasicEmail" className='workout-form-group'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Form>
    </div>
  );
}
