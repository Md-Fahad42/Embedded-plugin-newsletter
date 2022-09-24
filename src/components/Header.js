import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        {/* link */}
        <li class="nav-item">
          <NavLink className='nav-link' to='/signup'>Sign Up</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className='nav-link' to='/login'>Login</NavLink>
        </li>
        <li class="nav-item">
         <NavLink className='nav-link' to='/plugin'>Plugin</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    
  )
}

export default Header