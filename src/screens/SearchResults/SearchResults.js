import React, { Component } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import "./SearchResults.css"

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
    return(
        <main className="searchContainer">
          <h2 className="tituloResult">Results for: '{this.props.match.params.query}' </h2>
              {this.state.result.length > 0 ? 
              <div className="categoria"> 
              <CardsContainer verMasMovies={this.state.result}/> 
              </div>
              : 
              <h3 className="errorSearch">
                Sorry, we couldn't find any results for "{this.props.match.params.query}"
              </h3> }
        </main>

    ) 
  }
}

export default SearchResults;
