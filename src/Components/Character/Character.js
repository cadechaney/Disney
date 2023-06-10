import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Character.css'

function Character({ _id, imageUrl, viewCharacter }) {
  return (
    <div className='character-card' id={_id} key={_id}>
      <section className='card-inner' >
        <div className='card-front'>
          <img className='character-image' alt='Character Portrait' src={imageUrl}></img>
          <div className='view-button-div'>
            <Link to={`/${_id}`} key={_id}>
              <button onClick={() => viewCharacter(_id)} className='more-info-button' > More Info </button>
            </Link>
          </div>
        </div>
      </section>
    </div>

  )
}

Character.propTypes = {
  _id: PropTypes.number,
  imageUrl: PropTypes.string,
  viewCharacter: PropTypes.func.isRequired
}


export default Character