import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import MainPage from '../MainPage/MainPage'
import './App.css'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [
        {
        id: 1,
        films: ['fight club'],
        tvShows: ['Something made up'],
        videoGames: ['gta 5'],
        allies: ['Jacob', 'Lauren'],
        enemies: ['various members in society'],
        name: 'Cade',
        imageUrl: "https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png"
        },
        {
          id: 2,
          films: ['N/A'],
          tvShows: ['Something about David Goggins'],
          videoGames: ['doom eternal'],
          allies: ['Cade', 'Lauren'],
          enemies: ['tbd'],
          name: 'Jacob',
          imageUrl: "https://static.wikia.nocookie.net/disney/images/5/51/Giffany.png"
        },
        {
          id: 3,
          films: ['twilight'],
          tvShows: ['Something about Rich Piana'],
          videoGames: ['gta 5'],
          allies: ['Cade', 'Jacob'],
          enemies: ['only one'],
          name: 'Lauren',
          imageUrl: "https://static.wikia.nocookie.net/disney/images/8/80/Profile_-_627.png"
        },
        {
          id: 4,
          films: ['twilight'],
          tvShows: ['Something about Rich Piana'],
          videoGames: ['gta 5'],
          allies: ['Cade', 'Jacob'],
          enemies: ['only one'],
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
        <Switch>
          <Route path='/' render={() => <MainPage charactersDetails={this.state.characters} />} />
        </Switch>
      </>
    );
  }
}

export default App;
