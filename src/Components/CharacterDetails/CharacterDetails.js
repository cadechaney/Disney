import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './CharacterDetails.css'
import goldStar from '../../assets/Gold_Star.svg-1.png'
import emptyStar from '../../assets/emptyStar.png'

function CharacterDetails({clickedCharacter, addFavorite, favoritesList}) {

if(Object.keys(clickedCharacter).length === 0) {
  return (
    <h1>Click the Castle to View Other Characters</h1>
  )
} else {

  return (
    <div className='single-char-container'>
      <section className='image-star-container'>
        <img className='character-portrait' alt='Character Portrait' src={clickedCharacter.imageUrl}></img>
        <div onClick={() => {addFavorite(clickedCharacter._id)}} className='favoriting-star-container'>

        {favoritesList.find(char => char._id === clickedCharacter._id) ? (
    <img className='favorite-star' alt='star' src={goldStar} />
  ) : (
    <img className='favorite-star' alt='star' src={emptyStar} />
  )}
        </div>
      </section>
      <section className='single-character-details'>
        <h2>Name: {clickedCharacter.name}</h2>
        <h3>Films: {clickedCharacter.films}</h3>
        <h3>TV Shows: {clickedCharacter.tvShows}</h3>
        <h3>Video Games: {clickedCharacter.videoGames}</h3>
        <h3>Allies: {clickedCharacter.allies}</h3>
        <h3>Enemies: {clickedCharacter.enemies}</h3>
      </section>
    </div>
  )
}}

CharacterDetails.propTypes = {
  clickedCharacter: PropTypes.shape({
    _id: PropTypes.number,
    films: PropTypes.arrayOf(
      PropTypes.string
    ),
    imageUrl: PropTypes.string,
    tvShows: PropTypes.arrayOf(
      PropTypes.string
    ),
    videoGames: PropTypes.arrayOf(
      PropTypes.string
    ),
    allies: PropTypes.arrayOf(
      PropTypes.string
    ),
    enemies: PropTypes.arrayOf(
      PropTypes.string
    )
  }),
  addFavorite: PropTypes.func.isRequired,
  favoritesList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
    films: PropTypes.arrayOf(
      PropTypes.string
    ),
    imageUrl: PropTypes.string,
    tvShows: PropTypes.arrayOf(
      PropTypes.string
    ),
    videoGames: PropTypes.arrayOf(
      PropTypes.string
    ),
    allies: PropTypes.arrayOf(
      PropTypes.string
    ),
    enemies: PropTypes.arrayOf(
      PropTypes.string
    )
    })
  )
}

export default CharacterDetails