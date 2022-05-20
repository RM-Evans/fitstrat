import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import Navbar from '../Navbar/Navbar';

import './Header.css';
import { FaUserCircle } from 'react-icons/fa';

import { HiMenu } from 'react-icons/hi';

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  function handleMenu() {
    // I dont know why this makes the page change faster
    setMenuToggle(!menuToggle);
    // console.log(menuToggle)
  }

  return (
    <div>
      <header>
        <div className="profile-icon">
          <IconContext.Provider value={{ color: '#F8F6F2' }}>
            <FaUserCircle />
          </IconContext.Provider>
        </div>
      </header>
      <div className="ham-menu-bg">
        <div className="floating-ham" onClick={handleMenu}>
          <IconContext.Provider value={{ color: '#7BC9BE' }}>
            <div>
              <HiMenu />
            </div>
          </IconContext.Provider>
        </div>
      </div>

      {menuToggle && <Navbar onChange={handleMenu} />}
    </div>
  );
}
