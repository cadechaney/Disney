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
      characters: [
        
        {
          _id: 154,
          films: [
          "Dinosaur"
          ],
          shortFilms: [ ],
          tvShows: [ ],
          videoGames: [
          "Disney's Dinosaur (video game)"
          ],
          parkAttractions: [
          "DINOSAUR"
          ],
          allies: [ ],
          enemies: [ ],
          sourceUrl: "https://disney.fandom.com/wiki/Aladar",
          name: "Aladar",
          imageUrl: "https://static.wikia.nocookie.net/disney/images/8/8c/Aladar_profile.jpg",
          createdAt: "2021-04-12T01:31:56.351Z",
          updatedAt: "2021-12-20T20:39:18.877Z",
          url: "https://api.disneyapi.dev/characters/154",
          __v: 0
          },
          {
          _id: 155,
          films: [
          "Dinosaur"
          ],
          shortFilms: [ ],
          tvShows: [ ],
          videoGames: [ ],
          parkAttractions: [ ],
          allies: [ ],
          enemies: [ ],
          sourceUrl: "https://disney.fandom.com/wiki/Aladar%27s_Mother",
          name: "Aladar's Mother",
          imageUrl: "https://static.wikia.nocookie.net/disney/images/5/5b/Dinosaur-disneyscreencaps.com-84.jpg",
          createdAt: "2021-04-12T01:31:57.050Z",
          updatedAt: "2021-12-20T20:39:18.877Z",
          url: "https://api.disneyapi.dev/characters/155",
          __v: 0
          },
{
_id: 143,
films: [ ],
shortFilms: [ ],
tvShows: [
"The Lion Guard"
],
videoGames: [ ],
parkAttractions: [ ],
allies: [ ],
enemies: [ ],
sourceUrl: "https://disney.fandom.com/wiki/Ajabu",
name: "Ajabu",
imageUrl: "https://static.wikia.nocookie.net/disney/images/8/89/Ajabu.png",
createdAt: "2021-04-12T01:31:49.768Z",
updatedAt: "2021-12-20T20:39:18.877Z",
url: "https://api.disneyapi.dev/characters/143",
__v: 0
},
{
_id: 144,
films: [
"Mickey's House of Villains"
],
shortFilms: [
"Donald Duck and the Gorilla",
"Duck Pimples"
],
tvShows: [
"Mickey Mouse Works"
],
videoGames: [
"Deep Duck Trouble"
],
parkAttractions: [ ],
allies: [ ],
enemies: [ ],
sourceUrl: "https://disney.fandom.com/wiki/Ajax_the_Gorilla",
name: "Ajax the Gorilla",
imageUrl: "https://static.wikia.nocookie.net/disney/images/8/81/Pepito_el_Gorila.jpg",
createdAt: "2021-04-12T01:31:50.596Z",
updatedAt: "2021-12-20T20:39:18.877Z",
url: "https://api.disneyapi.dev/characters/144",
__v: 0
},
{
_id: 145,
films: [ ],
shortFilms: [ ],
tvShows: [
"The Proud Family"
],
videoGames: [ ],
parkAttractions: [ ],
allies: [ ],
enemies: [ ],
sourceUrl: "https://disney.fandom.com/wiki/Ajay",
name: "Ajay",
imageUrl: "https://static.wikia.nocookie.net/disney/images/e/e3/Ajay.png",
createdAt: "2021-04-12T01:31:51.113Z",
updatedAt: "2021-12-20T20:39:18.877Z",
url: "https://api.disneyapi.dev/characters/145",
__v: 0
},
{
_id: 146,
films: [ ],
shortFilms: [ ],
tvShows: [
"Aladdin (TV series)"
],
videoGames: [ ],
parkAttractions: [ ],
allies: [ ],
enemies: [ ],
sourceUrl: "https://disney.fandom.com/wiki/Ajed_Al-Gebraic",
name: "Ajed Al-Gebraic",
imageUrl: "https://static.wikia.nocookie.net/disney/images/d/db/Algebraic.jpg",
createdAt: "2021-04-12T01:31:51.659Z",
updatedAt: "2021-12-20T20:39:18.877Z",
url: "https://api.disneyapi.dev/characters/146",
__v: 0
},
{
_id: 147,
films: [ ],
shortFilms: [ ],
tvShows: [
"Aladdin (TV series)"
],
videoGames: [ ],
parkAttractions: [ ],
allies: [ ],
enemies: [ ],
sourceUrl: "https://disney.fandom.com/wiki/Akbar",
name: "Akbar",
imageUrl: "https://static.wikia.nocookie.net/disney/images/6/69/Akbar.jpg",
createdAt: "2021-04-12T01:31:52.203Z",
updatedAt: "2021-12-20T20:39:18.877Z",
url: "https://api.disneyapi.dev/characters/147",
__v: 0
}
      ],
      singleCharacterDetails: {},
      favorites: []
    }
  }
  
  componentDidMount = () => {
  //   fetchCharacters()
  //     .then(data => this.setState({ characters: data.data }))
  }

 

  viewCharacter = (_id) => {
    const findCharacter = this.state.characters.find(character => character._id === _id)
    // console.log('character', findCharacter)
    this.setState({ singleCharacterDetails: findCharacter}, () => {
      // console.log(this.state.singleCharacterDetails)
    })
  }

  checkFavorites = (arr, id) => {
    return arr.some(char => char._id === id)
  }

  addFavorite = (id) => {
    if(this.checkFavorites(this.state.favorites, id)) {
      this.setState((prevState => ({ favorites: prevState.favorites.filter(char => char._id !== id)})), () => {
        console.log('removed from favorites', this.state.favorites)
      })
    } else {
      const findCharacter = this.state.characters.find(character => character._id === id)
      // console.log(findCharacter)
      this.setState((prevState => ({ favorites: [...prevState.favorites, findCharacter]})), () => {
        console.log('saved to favorites array', this.state.favorites)
      })
    }
  }

  render() {

    return (
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/favorites' render={() => <FavoritesContainer favoritesDetails={this.state.favorites} viewCharacter={this.viewCharacter}/>}/>
          <Route path='/:id' render={({match}) => <CharacterDetails clickedCharacter={this.state.singleCharacterDetails} key={match.params._id} id={match.params._id} addFavorite={this.addFavorite} favoritesList={this.state.favorites} />} />
          <Route path='/' render={() => <MainPage charactersDetails={this.state.characters} viewCharacter={this.viewCharacter} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
