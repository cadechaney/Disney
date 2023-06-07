import React from 'react'
import Character from '../Character/Character'
import image from '../../assets/MainPageBackground.webp'
import './MainPage.css'

function MainPage({charactersDetails}) {
  console.log(charactersDetails)
  const characters = charactersDetails.map(character => {
    return (<Character key={character.id} id={character.id} films={character.films}  name={character.name} imageUrl={character.imageUrl} />)
  })
  return (
    <div className='characters-container'>
      <img className='background-image' src={image} alt='background image'></img>
      <div className='overlay-content'>
      {characters}
      </div>
    </div>
  )
}

export default MainPage

