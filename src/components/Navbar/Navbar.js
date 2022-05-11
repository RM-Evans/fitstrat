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

        <Link to="/newWorkout" onClick={handleMenu} className="menu-option">
          Create new workout
        </Link>
        <div className="close-menu" onClick={handleMenu}>
          <IconContext.Provider value={{ color: '#f4f1de' }}>
            <div>
              <IoMdCloseCircleOutline />
            </div>
          </IconContext.Provider>
        </div>
      </nav>
    </div>
  )
}
