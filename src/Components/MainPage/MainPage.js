import React from 'react'
import './MainPage.css'

function MainPage({charactersDetails}) {
  console.log(charactersDetails)
  const characters = charactersDetails.map(character => {
    return <Character />
  })
  return (
    <> 
      <p>main Page</p>
    </>
  )
}

export default MainPage

