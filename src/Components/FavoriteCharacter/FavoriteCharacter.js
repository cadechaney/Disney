import React from 'react'
import './FavoriteCharacter.css'

function FavoriteCharacter({ id, films, tvShows, videoGames, allies, enemies, name, imageUrl}) {

  return (
    <div className='favorite-character-card' id={id}>
      <section className='card-inner'>
        <div className='card-front'>
          <img className='favorite-character-image' alt='Character Portrait' src={imageUrl}></img>
        </div>
        <div className='favorite-character-details'>
          <h2>Name: {name}</h2>
          <h4>Films: {films}</h4>
          <h4>TV Shows: {tvShows}</h4>
          <h4>Video Games:{videoGames}</h4>
          <h4>Allies: {allies}</h4>
          <h4>Enemies: {enemies}</h4>
        </div>
      </section>
    </div>
  )
}

export default FavoriteCharacter