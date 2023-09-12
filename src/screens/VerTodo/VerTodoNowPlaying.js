import React, { Component } from "react";
import './VerTodo.css'
import CardsContainer from "../../components/CardsContainer/CardsContainer"


class VerTodoTopRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top_rated:[],
      pageMovie: 2,
    };
  }

  componentDidMount() {

      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => 
          this.setState({
            top_rated : data.results
          })

      )
      .catch((error) => console.log("El error es: " + error));

  }
  showMoreMovies() {
    let pagenum = this.state.pageMovie;

    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=${pagenum}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          top_rated: data.results.concat(this.state.top_rated),
          pageMovie: pagenum + 1,
        })
      )
      .catch((error) => console.log("El error es: " + error));
  }


  render() {
    console.log(this.state.top_rated);
    return(
      <React.Fragment>
        <h3>VER TODO:</h3>
        {this.state.top_rated.length > 0 ?  
            <main>
            <button onClick={() => this.showMoreMovies()}> Traer más </button>
            <CardsContainer verMasMovies={this.state.top_rated} /> 
            </main>
        :
        <h3>Cargando ...</h3>}
       
        
      </React.Fragment>
    )
  }
}

export default VerTodoTopRated;