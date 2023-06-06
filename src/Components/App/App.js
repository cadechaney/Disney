import React, { Component } from 'react'
import Header from '../Header/Header'
import MainPage from '../MainPage/MainPage'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [
        {
        id: 1,
        tvShows: ['Something made up'],
        name: 'Cade',
        imageUrl: "https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png"
        },
        {
          id: 2,
          tvShows: ['Something about David Goggins'],
          name: 'Jacob',
          imageUrl: "https://static.wikia.nocookie.net/disney/images/5/51/Giffany.png"
        },
        {
          id: 3,
          tvShows: ['Something about Rich Piana'],
          name: 'Lauren',
          imageUrl: "https://static.wikia.nocookie.net/disney/images/8/80/Profile_-_627.png"
        },
      ]
    }
  }


  render() {

    return (
      <>
        <Header />
        <MainPage />
      </>
    );
  }
}

export default App;
