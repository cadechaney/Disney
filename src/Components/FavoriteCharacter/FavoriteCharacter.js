import React from 'react'
import { Link } from 'react-router-dom'
import './FavoriteCharacter.css'

function FavoriteCharacter({ id, films, tvShows, name, imageUrl, viewCharacter}) {

  return (
    <div className='favorite-character-card' id={id}>
      <section className='favorite-card-inner'>
        <div className='favorite-card-front'>
          <img className='favorite-character-image' alt='Character Portrait' src={imageUrl}></img>
        </div>
        <div className='favorite-character-details'>
          <h2>Name: {name}</h2>
          <h4>Films: {films}</h4>
          <h4>TV Shows: {tvShows}</h4>
          <div>
            <Link to={`/${id}`} key={id}>
              <button onClick={() => viewCharacter(id)}>View Info</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FavoriteCharacter