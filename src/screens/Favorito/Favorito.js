import React, { Component } from "react";
import './Favorito.css'

class Favorito extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    // MOVIES
    let favoritosMovie = []
    let recuperoStorage = localStorage.getItem('favoritosMovie');

    if (recuperoStorage != null){
      favoritosMovie = JSON.parse(recuperoStorage);
    }

    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) =>{
        this.setState({
          upcoming : data.results
        })
      }
        
      )
      
      .catch((error) => console.log("El error es: " + error));
  }

  render() {
    console.log(this.state.personaje);
    return (
      <React.Fragment>
        <h2>MOVIES</h2>

        <h2>SERIES</h2>
      </React.Fragment>
    )
  }
}

export default Favorito;
