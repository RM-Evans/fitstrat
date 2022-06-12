import { Link } from 'react-router-dom'

import { IconContext } from 'react-icons'

import { IoMdCloseCircleOutline } from 'react-icons/io'

import './Navbar.css'

export default function Navbar(props) {
  function handleMenu(e) {
    props.onChange(e.target.value)
    console.log(props)
  }
  return (
    <div className="navbar-container">
      <nav className="navbar-main">
        <Link to="/" onClick={handleMenu} className="menu-option">
          Home
        </Link>

        <Link to="/planner" onClick={handleMenu} className="menu-option">
          Planner
        </Link>

        <Link to="/newworkout" onClick={handleMenu} className="menu-option">
          Create new workout
        </Link>

        <Link to="/login" onClick={handleMenu} className="menu-option">
          Login
        </Link>

        <Link to="/signup" onClick={handleMenu} className="menu-option">
          Signup
        </Link>
        <div className="close-menu" onClick={handleMenu}>
          <IconContext.Provider value={{ className: 'close-me' }}>
            <div>
              <IoMdCloseCircleOutline />
            </div>
          </IconContext.Provider>
        </div>
      </nav>
    </div>
  )
}
