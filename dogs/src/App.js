import React from 'react';
import './App.css';
import DogContainer from './components/DogContainer'

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
        let breedsWithImages = this.getAllBreedImages(data.message);
        this.setState({
          dogData: breedsWithImages,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getAllBreedImages = breeds => {
    for (const breed in breeds) {
      breeds[breed].imageURL = this.getBreedImage(breed);
    }
  }

  constructDogURL = breed => {
    return `https://dog.ceo/api/breed/${breed}/images/random`
  }

  getBreedImage = breed => {
    fetch(this.constructDogURL(breed))
    .then(res => {
      return res.json();
    })
    .then(data => {
      return data.message;
    })
    .catch(err => {
      throw new Error(err);
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Dogs!</h1>
        <DogContainer dogs={this.state.dogData} />
      </div>
    );
  }
}

export default App;
