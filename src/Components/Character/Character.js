import React from 'react'
import './Character.css'

function Character({id, films, name, imageUrl}) {
  
  return (
    <div className='character-card' id={id}>
      <img className='character-image' alt='Character Portrait' src={imageUrl}></img>
      <div className='character-details'>
        <div>
        <h2>{name}</h2>
        <p>Films: {films}</p>
        </div>
          <button>More Info</button>
      </div>
    </div>

  )
}

export default Character