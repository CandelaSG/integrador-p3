import React, { Component } from "react";
import './Favorites.css'
import CardsContainer from "../../components/CardsContainer/CardsContainer";

class Favorito extends Component {
  constructor() {
    super();
    this.state = {
      MoviesFav:[],
      SeriesFav:[]
    };
  }

  componentDidMount() {
    // MOVIES
    // Recupero el localStorage 
    let favoritosMovie = []
    let recuperoStorage = localStorage.getItem('favoritosMovie');

    if (recuperoStorage != null){
      favoritosMovie = JSON.parse(recuperoStorage);
    }

    // MOVIES EN FAVORITOS
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) =>{
        let MoviesFav = data.results.filter((contenido)=>{
          return favoritosMovie.includes(contenido.id)
        })
        this.setState({
          MoviesFav : MoviesFav
        })
      })
      .catch((error) => console.log("El error es: " + error));



      //SERIES
    // Recupero el localStorage 

    let favoritosSerie = []
    let recuperoStorageSerie = localStorage.getItem('favoritosSerie');

    if (recuperoStorageSerie != null){
      favoritosSerie = JSON.parse(recuperoStorageSerie);
    }

    // SERIES EN FAVORITOS
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) =>{
        let SeriesFav = data.results.filter((contenido)=>{
          return favoritosSerie.includes(contenido.id)
        })
        this.setState({
          SeriesFav : SeriesFav
        })
      })
      .catch((error) => console.log("El error es: " + error));
  }


  render() {
    console.log(this.state.MoviesFav);
    return (
      <React.Fragment>
        <main className="favoritosContainer">
        <h2>MOVIES</h2>
        {this.state.MoviesFav.length > 0 ? <CardsContainer verMasMovies={this.state.MoviesFav}/> : <h3 className="containerCards">Add a movie to your favorites</h3> }
        <h2>SERIES</h2>
        {this.state.SeriesFav.length > 0 ? <CardsContainer verMasSeries={this.state.SeriesFav}/> : <h3 className="containerCards">Add a serie to your favorites</h3> }
        </main>
      </React.Fragment>
      
    )
  }
}

export default Favorito;
