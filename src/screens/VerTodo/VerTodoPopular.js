import React, { Component } from "react";
import './VerTodo.css';
import CardsContainer from "../../components/CardsContainer/CardsContainer";

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
          page: pagenum + 1,
        })
      )
      .catch((error) => console.log("El error es: " + error));
  }
  

  render() {
    console.log(this.state.popular);
    return(
      <React.Fragment>
        
        {this.state.popular.length > 0 ?  
            <main>
              <div className="containerVerTodo">
                <h2 className="titleVerTodo">POPULAR</h2>
                <button onClick={() => this.showMoreSeries()} className="buttonVerMas"> <strong>More titles</strong></button>
              </div>
            <CardsContainer verMasSeries={this.state.popular} /> 
            </main>
        :
        <h3>Cargando ...</h3>}
       
        
      </React.Fragment>
    )
  }
}

export default VerTodoPopular;