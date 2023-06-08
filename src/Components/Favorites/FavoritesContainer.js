
import React from 'react'
// import sadMickey from '../../assets/sadMickey.webp'
import sadMickey from '../../assets/mickeymouse-sad.gif'

function FavoritesContainer({ favoritesDetails }) {
  console.log(favoritesDetails)
  if(favoritesDetails.length === 0) {
    return (
      <section className='no-favorites-container'>
        <img src={sadMickey} alt='Sad Mickey'></img>
        <h1>You Have No Favorites</h1>

      </section>
      )
    } else {
      return (
      <h1>you favorited {favoritesDetails.length} character/s</h1>
    )

  }
}

export default FavoritesContainer