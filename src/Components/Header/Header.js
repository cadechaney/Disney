import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../../assets/disneyLogo.png'

function Header() {


  return (
    <div className='header'>
      <h1 className='app-title'>Disney Character Discovery</h1>
      <div className='view-favorites'>
        <Link to={'/favorites'}>
          <p>Image will be here</p>
        </Link>
      </div>
      <div className='header-image'>
        <Link to={'/'}>
          <img src={Logo} alt='disney logo image/ home button' className='header-image'></img>
        </Link>
      </div>
    </div>
  )
}

export default Header