import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'

const Navbar = () => {

  return (
    <div className="navbar container-fluid position-fixed p-3 px-5" style={{ zIndex: 100, background: 'rgba(0,0,0,0.1)' }}>
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
  )
}

export default Navbar
