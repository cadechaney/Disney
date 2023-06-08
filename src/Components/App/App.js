import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import fetchCharacters from '../../data/apiCalls'
import Header from '../Header/Header'
import MainPage from '../MainPage/MainPage'
import CharacterDetails from '../CharacterDetails/CharacterDetails'
import FavoritesContainer from '../Favorites/FavoritesContainer' 
import './App.css'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      singleCharacterDetails: {},
      favorites: []
    }
  }
  
  componentDidMount = () => {
    fetchCharacters()
      .then(data => this.setState({ characters: data.data }))
      
      
  }

  viewCharacter = (id) => {
    const findCharacter = this.state.characters.find(character => character._id === id)
    // console.log('character', findCharacter)
    this.setState({ singleCharacterDetails: findCharacter}, () => {
      // console.log(this.state.singleCharacterDetails)
    })
  }

  checkFavorites = (arr, id) => {
    return arr.some(char => char.id === id)
  }

  addFavorite = (id) => {
    if(this.checkFavorites(this.state.favorites, id)) {
      this.setState((prevState => ({ favorites: prevState.favorites.filter(char => char.id !== id)})), () => {
        console.log('removed from favorites', this.state.favorites)
      })
    } else {
      const findCharacter = this.state.characters.find(character => character.id === id)
      // console.log(findCharacter)
      this.setState((prevState => ({ favorites: [...prevState.favorites, findCharacter]})), () => {
        console.log('saved to favorites array', this.state.favorites)
      })
    }
  }

  render() {

    return (
      <>
        <Header />
        <Switch>
          <Route path='/favorites' render={() => <FavoritesContainer favoritesDetails={this.state.favorites} viewCharacter={this.viewCharacter}/>}/>
          <Route path='/:id' render={({match}) => <CharacterDetails clickedCharacter={this.state.singleCharacterDetails} key={match.params.id} id={match.params.id} addFavorite={this.addFavorite} favoritesList={this.state.favorites} />} />
          <Route path='/' render={() => <MainPage charactersDetails={this.state.characters} viewCharacter={this.viewCharacter} />} />
        </Switch>
      </>
    );
  }
}

export default App;
