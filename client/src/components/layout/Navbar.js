import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import logo2 from '../../img/logo2.png'

const Navbar = () => {

  return (
    <div>
      <div className="navbar container-fluid position-fixed p-3 px-5 navbar-web" style={{ zIndex: 100, background: 'rgba(0,0,0,0.1)' }}>
        <Link to="/">
          <img alt='SETIMAGE' src={logo} className='img-fluid' width='250px' />
        </Link>
        <div>
          <Link to='/' className='h6 mx-3'>Home</Link>
          <Link to='/' className='h6 mx-3'>'7'</Link>
          <Link to='/' className='h6 mx-3'>Discography</Link>
          <Link to='/' className='h6 mx-3'>Tour Dates</Link>
          <Link to='/' className='h6 mx-3'>Radio Show</Link>
          <Link to='/' className='h6 mx-3'>Photos</Link>
          <Link to='/' className='h6 mx-3'>Videos</Link>
        </div>
      </div>

      <nav class="navbar container-fluid position-fixed navbar-expand-md navbar-dark navbar-mobile" style={{ zIndex: 100, background: 'rgba(0,0,0,0.2)' }}>
        <Link to="/">
          <img alt='SETIMAGE' src={logo2} className='img-fluid mr-3' width='250px' />
        </Link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to='/' className='h6 mr-2'>Home</Link>
            </li>
            <li class="nav-item">
              <Link to='/' className='h6 mr-2'>'7'</Link>
            </li>
            <li class="nav-item">
              <Link to='/' className='h6 mr-2'>Discography</Link>
            </li>
            <li class="nav-item">
              <Link to='/' className='h6 mr-2'>Tour Dates</Link>
            </li>
            <li class="nav-item">
              <Link to='/' className='h6 mr-2'>Radio Show</Link>
            </li>
            <li class="nav-item">
              <Link to='/' className='h6 mr-2'>Photos</Link>
            </li>
            <li class="nav-item">
              <Link to='/' className='h6 '>Videos</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
