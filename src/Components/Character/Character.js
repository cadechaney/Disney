import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Character.css'

function Character({ _id, films, name, imageUrl, viewCharacter }) {
  return (
    <div className='character-card' id={_id} key={_id}>
      <section className='card-inner' >
        <div className='card-front'>
          <img className='character-image' alt='Character Portrait' src={imageUrl}></img>
        </div>
        <div className='character-details'>
          <h2>Name: {name}</h2>
          <p>Films: {films}</p>
          <div>
            <Link to={`/${_id}`} key={_id}>
              <button onClick={() => viewCharacter(_id)} className='more-info-button' >More Info</button>
            </Link>
          </div>
        </div>
      </section>
    </div>

  )
}

Character.propTypes = {
  _id: PropTypes.number,
  films: PropTypes.arrayOf(
    PropTypes.string
  ),
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  viewCharacter: PropTypes.func.isRequired
}


export default Character