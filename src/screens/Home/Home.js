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

        <main>
          <div className="containerPoster">
            <img className="posterEstreno" src="/img/posterInfinity.png" alt="Poster Infinity"/>
          </div>
        <h2>MOVIES</h2>
        <h3>UPCOMING</h3>
        <CardsContainer infoMovies={this.state.upcoming}/>
        <h3>NOW PLAYING</h3>
        <CardsContainer infoMovies={this.state.now_playing}/>
        <h2>SERIES</h2>
        <h3>POPULAR</h3>
        <CardsContainer infoSeries={this.state.popular}/>
        <h3>TOP RATED</h3>
        <CardsContainer infoSeries={this.state.top_rated}/>
        </main>

    ) 
  }
}

export default Home;
