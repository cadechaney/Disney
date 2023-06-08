import React from 'react'
import { Link } from 'react-router-dom'
import './Character.css'

function Character({id, films, name, imageUrl, viewCharacter}) {
  
  return (
    <div className='character-card' id={id}>
      <section className='card-inner'>
        <div className='card-front'>
          <img className='character-image' alt='Character Portrait' src={imageUrl}></img>
        </div>
        <div className='character-details'>
          <h2>Name: {name}</h2>
          <p>Films: {films}</p>
          <div>
            <Link to={`/${id}`} key={id}>
              <button onClick={() => viewCharacter(id)} className='more-info-button' >More Info</button>
            </Link>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Character