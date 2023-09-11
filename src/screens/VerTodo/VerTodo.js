import React, { Component } from "react";
import './VerTodo.css'
import CardsContainer from "../../components/CardsContainer/CardsContainer"
import Buscador from "../../components/Buscador/Buscador";

/* const endpointsMovies = ['upcoming','now_playing'];
const endpointsSeries = ['popular','top_rated']; */

class VerTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieVerTodo:[],
      serieVerTodo:[]
    };
  }

  componentDidMount() {
    let endpoint = this.props.match.params.category;
    console.log (endpoint)
    if (endpoint === "now_playing" || endpoint=== "upcoming"){
      fetch(`https://api.themoviedb.org/3/movie/${endpoint}?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => 
          this.setState({
            movieVerTodo : data.results
          })

      )
      .catch((error) => console.log("El error es: " + error));
      }
    else{
      fetch(`https://api.themoviedb.org/3/tv/${endpoint}?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) =>{
          this.setState({
            serieVerTodo : data.results
          })
      })
      .catch((error) => console.log("El error es: " + error));
    }
  }

  filtrarContenido(textoInput) {
    let contenidoFiltrados = this.state.contenido.filter((contenido) => {
      return contenido.name.toLowerCase().includes(textoInput.toLowerCase());
    });
    this.setState({
      contenido: contenidoFiltrados,
    });
  }

  render() {
    console.log(this.state.movieVerTodo);
    console.log(this.state.serieVerTodo);
    return(
      <React.Fragment>
        <Buscador filtro={(texto) => this.filtrarContenido(texto)} />
        <h3>VER TODO:</h3>
        {this.state.movieVerTodo.length > 0  || this.state.serieVerTodo.length > 0 ? 
          (this.state.movieVerTodo.length > 0 ? 
            <CardsContainer verMasMovies={this.state.movieVerTodo}/> : 
            <CardsContainer verMasSeries={this.state.serieVerTodo}/> )
        : <h3>Cargando ...</h3>}
       
        
      </React.Fragment>
    )
  }
}

export default VerTodo;