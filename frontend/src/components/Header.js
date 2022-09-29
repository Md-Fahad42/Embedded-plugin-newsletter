
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    
  return (
    
    // <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark navbar-dark" >
      {/* <!-- Container wrapper --> */}
      <div class="container-fluid">
    
        {/* <!-- Navbar brand --> */}
        <a class="navbar-brand" href="#">Plugin</a>
    
        {/* <!-- Toggle button --> */}
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
    
        {/* <!-- Collapsible wrapper --> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    
            {/* <!-- Link --> */}
            <li className="nav-item">
           <NavLink className="nav-link" to="/signup">Signup</NavLink>
          </li>
            <li className="nav-item">
           <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
            <li className="nav-item">
           <NavLink className="nav-link" to="/plugin">Plugin</NavLink>
          </li>
            <li className="nav-item">
           <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
          </li>
          </ul>
    
        </div>
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
    // <!-- Navbar -->
    
  )
}

export default Header