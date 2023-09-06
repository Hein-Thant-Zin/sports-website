import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
          <Link to='/'>Home</Link>
          
          <ul>
              <li><Link to='/players'>Players</Link></li>
              <li><Link to='/teams'>Teams</Link></li>
          </ul>
          
      </nav>     
  )
}

export default NavBar
