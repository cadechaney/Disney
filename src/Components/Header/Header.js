import React from 'react'
import './Header.css'
import Logo from '../../assets/disneyLogo.png'

function Header() {


  return (
    <div className='header'>
      <h1 className='app-title'>Disney Character Discovery</h1>
      <img src={Logo} alt='disney logo image/ home button' className='header-image'></img>
    </div>
  )
}

export default Header