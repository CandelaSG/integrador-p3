import React, { Component } from "react";
import './Home.css'
import CardsContainer from "../../components/CardsContainer/CardsContainer";

const endpointsMovies = ['upcoming','now_playing'];
const endpointsSeries = ['popular','top_rated'];

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    endpointsMovies.map((endpoint, idx) => {
      fetch(`https://api.themoviedb.org/3/movie/${endpoint}?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        if (endpoint=== 'upcoming' ) {
          this.setState({
            upcoming : data.results
          })
        } else{
          this.setState({
            now_playing : data.results
          })
        }
      }
      )
      .catch((error) => console.log("El error es: " + error));
    })
    
    endpointsSeries.map((endpoint, idx) => {
      fetch(`https://api.themoviedb.org/3/tv/${endpoint}?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) =>{
        if (endpoint=== 'popular' ) {
          this.setState({
            popular : data.results
          })
        } else{
          this.setState({
            top_rated : data.results
          })
        }
      }
        
      )
      .catch((error) => console.log("El error es: " + error));
    })
  }

  render() {
    return(
      <React.Fragment>
        <h2>MOVIES</h2>
        <h2>UPCOMING</h2>
        <CardsContainer infoMovies={this.state.upcoming}/>
        <h2>NOW PLAYING</h2>
        <CardsContainer infoMovies={this.state.now_playing}/>
        <h2>SERIES</h2>
        <h2>POPULAR</h2>
        <CardsContainer infoSeries={this.state.popular}/>
        <h2>TOP RATED</h2>
        <CardsContainer infoSeries={this.state.top_rated}/>
      </React.Fragment>
    ) 
  }
}

export default Home;
