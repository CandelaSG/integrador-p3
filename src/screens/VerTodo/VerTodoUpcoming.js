import React, { Component } from "react";
import './VerTodo.css';
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Loader from "../../components/Loader/Loader"
import SearchFilter from "../../components/Search/SearchFilter";

class VerTodoUpcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcoming:[],
      pageMovie: 2,
    };
  }

  componentDidMount() {

      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => 
          this.setState({
            upcoming : data.results
          })

      )
      .catch((error) => console.log("El error es: " + error));

  }
  showMoreMovies() {
    let pagenum = this.state.pageMovie;

    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=${pagenum}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          upcoming: data.results.concat(this.state.upcoming),
          pageMovie: pagenum + 1,
        })
      )
      .catch((error) => console.log("El error es: " + error));
  }
  filtroUpcoming = (textoAFiltrar)=>{
    let upcomingFiltrado = this.state.upcoming.filter((upcomingMovie)=>
       (upcomingMovie.title.toUpperCase().includes(textoAFiltrar.toUpperCase())
        )
    )
    this.setState({
      upcoming : upcomingFiltrado
    })
    }

  render() {
    console.log(this.state.upcoming);
    return(
      <React.Fragment>
        {this.state.upcoming.length > 0 ?  
            <main className="verTodoMain">
              <SearchFilter filtrar={(text)=> this.filtroUpcoming(text)}/>
              <div className="containerVerTodo">
                <h2 className="titleVerTodo">UPCOMING</h2>
                <button onClick={() => this.showMoreMovies()} className="buttonVerMas"> <strong>More titles</strong></button>
              </div>
            <CardsContainer verMasMovies={this.state.upcoming} /> 
            </main>
        :
        <h3 className="errorSearch">
        Sorry, we couldn't find any results
        </h3>
        }
       
        
      </React.Fragment>
    )
  }
}

export default VerTodoUpcoming;