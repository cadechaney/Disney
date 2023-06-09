import React from 'react'
import PropTypes from 'prop-types'
import FavoriteCharacter from '../FavoriteCharacter/FavoriteCharacter'
import './FavoritesContainer.css'
import sadMickey from '../../assets/mickeymouse-sad.gif'
import imageBackground from '../../assets/MainPageBackground.webp'

function FavoritesContainer({ favoritesDetails, viewCharacter}) {
  console.log(favoritesDetails)
  if(favoritesDetails.length === 0) {
    return (
      <section className='no-favorites-container'>
        <img className='sad-mickey-image' src={sadMickey} alt='Sad Mickey'></img>
        <h1 className='no-favorites-message'>You Have No Favorites</h1>
      </section>
      )
    } else {
      const characters = favoritesDetails.map(char => {
        return (
          <FavoriteCharacter key={char._id} id={char._id} films={char.films} tvShows={char.tvShows} videoGames={char.videoGames} 
          allies={char.allies} enemies={char.enemies} name={char.name} imageUrl={char.imageUrl} viewCharacter={viewCharacter} />
        )
      })
      return (
        
        <div className='favorite-characters-container' >
          <img className='background-image-favorites' src={imageBackground} alt='background image'></img>
          <h2 className='favorites-length'>
            You Have {favoritesDetails.length} Favorite{' '}
            {favoritesDetails.length === 1 ? 'Character' : 'Characters'}
          </h2>
          <div className='favorites-overlay'>
            {characters}  
          </div>
        </div>
    )
  }
}

FavoritesContainer.propTypes = {
  favoritesDetails: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
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
    })),
    viewCharacter: PropTypes.func.isRequired
}

export default FavoritesContainer