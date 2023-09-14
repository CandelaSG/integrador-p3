import React, { Component } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";


class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
        result:[]
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}&api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data => this.setState(
                { result: data.results }
            ))
            .catch(error => console.log(error))
  }
  

  render() {
    {console.log(this.state.result);}
    return(
        <main>
          <div className="categoria">
            <h2 className="tituloResult">Results for: '{this.props.match.params.query}' </h2>
              {this.state.result.length > 0 ? <CardsContainer verMasMovies={this.state.result}/> : <h3>Cargando...</h3> }
          </div>
        </main>

    ) 
  }
}

export default SearchResults;
