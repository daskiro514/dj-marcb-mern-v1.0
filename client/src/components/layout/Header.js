import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import logo2 from '../../img/logo2.png'

const Header = () => {

  return (
    <div>
      <div className="navbar container-fluid p-3 px-5 navbar-web" style={{ zIndex: 100, background: 'rgba(0,0,0,0.1)' }}>
        <Link to="/">
          <img alt='SETIMAGE' src={logo} className='img-fluid' width='250px' />
        </Link>
        <div>
          <Link to='/' className='h6 mx-3'>Home</Link>
          <Link to='/7-credits' className='h6 mx-3'>'7'</Link>
          <Link to='/discography' className='h6 mx-3'>Discography</Link>
          <Link to='/tour-dates' className='h6 mx-3'>Tour Dates</Link>
          <Link to='/radio-show' className='h6 mx-3'>Radio Show</Link>
          <Link to='/image-gallery' className='h6 mx-3'>Photos</Link>
          <a href='https://www.youtube.com/watch?v=v8TVixpaBcQ&list=PLz1iM8YfFbTfnLTupp_Ps49dv1MXoCaep&index=1' className='h6 mx-3'>Videos</a>
        </div>
      </div>

      <nav className="navbar container-fluid navbar-expand-md navbar-dark navbar-mobile" style={{ zIndex: 100, background: 'rgba(0,0,0,0.2)' }}>
        <Link to="/">
          <img alt='SETIMAGE' src={logo2} className='img-fluid mr-3' width='250px' />
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' className='h6 mr-2'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/7-credits' className='h6 mr-2'>'7'</Link>
            </li>
            <li className="nav-item">
              <Link to='/discography' className='h6 mr-2'>Discography</Link>
            </li>
            <li className="nav-item">
              <Link to='/tour-dates' className='h6 mr-2'>Tour Dates</Link>
            </li>
            <li className="nav-item">
              <Link to='/radio-show' className='h6 mr-2'>Radio Show</Link>
            </li>
            <li className="nav-item">
              <Link to='/image-gallery' className='h6 mr-2'>Photos</Link>
            </li>
            <li className="nav-item">
              <a href='https://www.youtube.com/watch?v=v8TVixpaBcQ&list=PLz1iM8YfFbTfnLTupp_Ps49dv1MXoCaep&index=1' className='h6 '>Videos</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header