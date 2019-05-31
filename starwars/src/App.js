import React, { Component } from 'react';
import './reset.css';
import './App.css';
import CharacterContainer from './components/CharacterContainer';
import Pagination from './components/Pagination';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: '',
      previousPage: '',
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          nextPage: data.next,
          previousPage: data.previous,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = (e) => {
    if(this.state.nextPage){
      this.getCharacters(this.state.nextPage);
    }
  }

  previousPage = (e) => {
    if(this.state.previousPage){
      this.getCharacters(this.state.previousPage);
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterContainer charData={this.state.starwarsChars} />
        <Pagination
          nextPage={this.state.nextPage}
          previousPage={this.state.previousPage}
          nextPageCB={this.nextPage}
          previousPageCB={this.previousPage}
        />
      </div>
    );
  }
}

export default App;
