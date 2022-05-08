import React from 'react'
import { IconContext } from 'react-icons'

import './Header.css'
import { FaUserCircle } from 'react-icons/fa'

import { HiMenu } from 'react-icons/hi'

export default function Header() {
  return (
    <div>
      <header>
        <div className="profile-icon">
          <IconContext.Provider value={{ color: '#f4f1de' }}>
            <FaUserCircle />
          </IconContext.Provider>
        </div>
      </header>
      <div className="ham-menu-bg">
        <div className="floating-ham">
          <IconContext.Provider value={{ color: '#7BC9BE' }}>
            <div>
              <HiMenu />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}
