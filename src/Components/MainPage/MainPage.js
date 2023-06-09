import React from 'react'
import Character from '../Character/Character'
import PropTypes from 'prop-types'
import image from '../../assets/MainPageBackground.webp'
import './MainPage.css'

function MainPage({charactersDetails, viewCharacter}) {
  const characters = charactersDetails.map(character => {
    return (
    <Character 
      key={character._id} 
      _id={character._id} 
      films={character.films}  
      name={character.name} 
      imageUrl={character.imageUrl}  
      viewCharacter={viewCharacter} />
    )
  })
  return (
    <div className='characters-container' >
      <div className='repeater-div' >
        {/* <img className='background-image' src={image} alt='background image'></img> */}
      </div>
      <div className='overlay-content'>
        {characters}
      </div>
    </div>
  )
}

MainPage.propTypes = {
  charactersDetails: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
      films: PropTypes.arrayOf(
        PropTypes.string
      ),
      name: PropTypes.string,
      imageUrl: PropTypes.string,
    })),
  viewCharacter: PropTypes.func.isRequired
}

export default MainPage

