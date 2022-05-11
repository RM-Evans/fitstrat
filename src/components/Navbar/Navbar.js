import { Link } from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar-main">
      <Link to="/">Home</Link>

      <Link to="/newWorkout">Create new workout</Link>
    </nav>
  )
}
