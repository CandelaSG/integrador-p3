import React, { Component } from "react";
import './VerTodo.css';
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Loader from "../../components/Loader/Loader";
import SearchFilter from "../../components/Search/SearchFilter";

class VerTodoPopular extends Component {
    constructor(props) {
      super(props);
      this.state = {
        popular:[],
        pageSerie: 2
      };
    }

  componentDidMount() {
      fetch(`https://api.themoviedb.org/3/tv/popular?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) =>{
          this.setState({
            popular : data.results
          })
      })
      .catch((error) => console.log("El error es: " + error));
  }

  showMoreSeries() {
      let pagenum = this.state.pageSerie;
      fetch(`https://api.themoviedb.org/3/tv/popular?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=${pagenum}`)
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            popular: data.results.concat(this.state.popular),
            pageSerie: pagenum + 1,
          })
        )
        .catch((error) => console.log("El error es: " + error));
    }

  filtroPopular = (textoAFiltrar)=>{
    let popularFiltrado = this.state.popular.filter((popularSerie)=>
       (popularSerie.name.toUpperCase().includes(textoAFiltrar.toUpperCase())
        )
    )
    this.setState({
      popular : popularFiltrado
    })
    }

  render() {
    console.log(this.state.popular);
    return(
      <React.Fragment>
        <SearchFilter filtrar={(text)=> this.filtroPopular(text)}/>
        {this.state.popular.length > 0 ?  
            <main className="verTodoMain">
              <div className="containerVerTodo">
                <h2 className="titleVerTodo">POPULAR</h2>
                <button onClick={() => this.showMoreSeries()} className="buttonVerMas"> <strong>More titles</strong></button>
              </div>
            <CardsContainer verMasSeries={this.state.popular} /> 
            </main>
        :
        <h3 className="errorSearch">
        Sorry, we couldn't find any results
        </h3>}
       
        
      </React.Fragment>
    )
  }
}

export default VerTodoPopular;