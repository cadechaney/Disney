import React from 'react'
import { Link } from 'react-router-dom'
import './Character.css'

function Character({id, films, name, imageUrl, viewCharacter}) {
  
  return (
    <div className='character-card' id={id}>
      <img className='character-image' alt='Character Portrait' src={imageUrl}></img>
      <div className='character-details'>
        <div>
        <h2>{name}</h2>
        <p>Films: {films}</p>
        </div>
        <Link to={`/${id}`} key={id}>
          <button onClick={() => viewCharacter(id)} className='more-info-button' >More Info</button>
        </Link>
      </div>
    </div>

  )
}

export default Character