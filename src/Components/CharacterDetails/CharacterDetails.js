import React from 'react'
import goldStar from '../../assets/Gold_Star.svg-1.png'

function CharacterDetails({clickedCharacter}) {

console.log(clickedCharacter)
  return (
    <div className='single-char-container'>
      <section className='image/star-container'>
        <img className='character-portrait' alt='Character Portrait' src={clickedCharacter.imageUrl}></img>
        <div className='favoriting-star-container'>
          <img className='favorite-star' alt='star' src={goldStar}></img>
        </div>
        <p>image and favoriting star</p>
      </section>
      <section className='single-character-details'>
        <p>character details</p>
      </section>
    </div>
  )
}

export default CharacterDetails