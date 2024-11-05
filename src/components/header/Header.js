import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  const menu=()=>{
    document.getElementById("myDropdown").classList.toggle("show")
  }
  return (
    <div className='header'>
     <a href="#" className="logo"><span>G</span>okulakrishnan</a>

        <ul className="navbar">
            <li><Link  to='/' class="active">Home</Link></li>
            <li><Link  to="/Projects">Projects</Link></li>
            <li><Link to='/resume'>Resume</Link></li>

        </ul>
        <div className="menu-btn" onClick={menu}><span>Menu</span><div className='bx bx-menu' id="menu-icon">
          
        </div>
        </div>
        <div className='open-menu' id='myDropdown' >
          <ul>
        <li><Link  to='/' class="active">Home</Link></li>
            <li><Link  to="/Projects">Projects</Link></li>
            <li><Link to='/resume'>Resume</Link></li>
            </ul>
        </div>

      </div>

  )
}

export default Header