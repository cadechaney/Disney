
import React from 'react'

function FavoritesContainer({ favoritesDetails }) {
  console.log(favoritesDetails)
  if(favoritesDetails.length === 0) {
    return (
      <section className='no-favorites-container'>
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