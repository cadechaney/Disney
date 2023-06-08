import React from 'react'
import './FavoritesContainer.css'
import sadMickey from '../../assets/mickeymouse-sad.gif'


function FavoritesContainer({ favoritesDetails }) {
  console.log(favoritesDetails)
  if(favoritesDetails.length === 0) {
    return (
      <section className='no-favorites-container'>
        <img className='sad-mickey-image' src={sadMickey} alt='Sad Mickey'></img>
        <h1 className='no-favorites-message'>You Have No Favorites</h1>
      </section>
      )
    } else {
      const characters = favoritesDetails.map(character => {
        // return ()
      })
      return (
      <h2>
        You Have {favoritesDetails.length} Favorite{' '}
        {favoritesDetails.length === 1 ? 'Character' : 'Characters'}
        <div className='favorite-characters-container' >
          {/* {favorites} */}
        </div>
      </h2>

    )

  }
}

export default FavoritesContainer