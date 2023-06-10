import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../../assets/disneyLogo.png'
import oswald from '../../assets/Oswald_waving_at_camera.webp'

function Header() {


  return (
    <div className='header'>
      <h1 className='app-title'>Disney Character Discovery</h1>
      <div className='view-favorites' id='oswald'>
        <Link to={'/favorites'}>
          <img src={oswald} alt='Oswald waving/ view favorites' title='View Favorites' className='view-favorites'></img>
        </Link>
      </div>
      <div className='header-image'>
        <Link to={'/'}>
          <img src={Logo} alt='disney logo image/ home button' title='View Home Page' className='header-image'></img>
        </Link>
      </div>
    </div>
  )
}

export default Header