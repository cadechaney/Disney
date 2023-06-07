import React from 'react'
import './CharacterDetails.css'
import goldStar from '../../assets/Gold_Star.svg-1.png'

function CharacterDetails({clickedCharacter, addFavorite, favoritesList}) {

console.log('sdfaadfs', favoritesList)
  return (
    <div className='single-char-container'>
      <section className='image-star-container'>
        <img className='character-portrait' alt='Character Portrait' src={clickedCharacter.imageUrl}></img>
        <div onClick={() => addFavorite(clickedCharacter.id)} className='favoriting-star-container'>
          {favoritesList.some(char => char.id === clickedCharacter.id) && <img className='favorite-star' alt='star' src={goldStar}></img>}
          {/* {favoritesList.some(char => char.id !== clickedCharacter.id) && <h1>unfavorited</h1>} */}
          <img className='favorite-star' alt='star' src={goldStar}></img>
        </div>
      </section>
      <section className='single-character-details'>
        <h2>Name: {clickedCharacter.name}</h2>
        <h3>Films: {clickedCharacter.films}</h3>
        <h3>TV Shows: {clickedCharacter.tvShows}</h3>
        <h3>Video Games: {clickedCharacter.videoGames}</h3>
        <h3>Allies: {clickedCharacter.allies}</h3>
        <h3>Enemies: {clickedCharacter.enemies}</h3>
      </section>
    </div>
  )
}

export default CharacterDetails