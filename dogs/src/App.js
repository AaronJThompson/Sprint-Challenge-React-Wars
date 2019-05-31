import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogData: [],
    };
  }

  componentDidMount() {
    this.getDogList('https://dog.ceo/api/breeds/list/all');
  }

  getDogList = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          dogData: data.message,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  constructDogURL = breed => {
    return `https://dog.ceo/api/breed/${breed}/images/random`
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Dogs!</h1>
      </div>
    );
  }
}

export default App;
