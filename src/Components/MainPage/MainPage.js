import React from 'react'
import Character from '../Character/Character'
import './MainPage.css'

function MainPage({charactersDetails}) {
  console.log(charactersDetails)
  const characters = charactersDetails.map(character => {
    return (<Character key={character.id} id={character.id} tvShows={character.tvShows} name={character.name} imgURL={character.imageUrl} />)
  })
  return (
    characters
  )
}

export default MainPage

