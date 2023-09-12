import React, { Component } from "react";
import './Home.css'
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { Link } from "react-router-dom";

const endpointsMovies = ['upcoming','now_playing'];
const endpointsSeries = ['popular','top_rated'];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcoming:[],
      now_playing:[],
      popular:[],
      top_rated:[]
    };
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
      })
      .catch((error) => console.log("El error es: " + error));
    })
    
    endpointsSeries.map((endpoint, idx) => {
      fetch(`https://api.themoviedb.org/3/tv/${endpoint}?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) =>{
        if (endpoint=== 'popular') {
          this.setState({
            popular : data.results
          })
        } else{
          this.setState({
            top_rated : data.results
          })
        }
      })
      .catch((error) => console.log("El error es: " + error));
    })
  }

  render() {
    console.log(this.state.now_playing);

    return(
        <main>
          <div className="containerPoster">
            <img className="posterEstreno" src="/img/posterInfinity.png" alt="Poster Infinity"/>
          </div>
          
        <h2>MOVIES</h2>
        <h3>UPCOMING</h3> <Link to={`/upcoming`}><p> WATCH ALL IN: UPCOMING </p></Link>
        {this.state.upcoming.length > 0 ? <CardsContainer infoMovies={this.state.upcoming}/> : <h3>Cargando...</h3> }
        
        <h3>NOW PLAYING</h3> <Link to={`/now_playing`}><p>   WATCH ALL IN: NOW PLAYING</p></Link>
        {this.state.now_playing.length > 0 ? <CardsContainer infoMovies={this.state.now_playing}/> : <h3>Cargando...</h3> }
        
        <h2>SERIES</h2>
        <h3>POPULAR</h3>  <Link to={`/popular`}><p>   WATCH ALL IN: POPULAR</p></Link>
        {this.state.popular.length > 0 ? <CardsContainer infoSeries={this.state.popular}/> : <h3>Cargando...</h3> }
        
        <h3>TOP RATED</h3> <Link to={`/top_rated`}><p>   WATCH ALL IN: TOP RATED</p></Link>
        {this.state.top_rated.length > 0 ? <CardsContainer infoSeries={this.state.top_rated}/> : <h3>Cargando...</h3> }
        
        </main>

    ) 
  }
}

export default Home;
