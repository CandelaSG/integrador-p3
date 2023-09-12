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

    return(
        <main>
          {/* <div className="containerPoster">
            <img className="posterEstreno" src="/img/posterInfinity.png" alt="Poster Infinity"/>
          </div> */}
          <div className="categoria">
            <h2 className="tituloResult">MOVIES</h2>
              <div className="titulosHome">
                <h3 className="titulo">UPCOMING</h3> 
                <Link to={`/upcoming`}><p className="titulo"> <u>More titles</u></p></Link>
              </div>
              {this.state.upcoming.length > 0 ? <CardsContainer infoMovies={this.state.upcoming}/> : <h3>Cargando...</h3> }
          </div>

          <div className="categoria">
            <div className="titulosHome">
              <h3 className="titulo">NOW PLAYING</h3> 
              <Link to={`/now_playing`}><p className="titulo"> <u>More titles</u></p></Link>
            </div>

            {this.state.now_playing.length > 0 ? <CardsContainer infoMovies={this.state.now_playing}/> : <h3>Cargando...</h3> }
            
          </div>
          
          <h2 className="tituloResult">SERIES</h2>

          <div className="categoria">
            <div className="titulosHome">
              <h3 className="titulo">POPULAR</h3> 
              <Link to={`/popular`}><p className="titulo"> <u>More titles</u></p></Link>
            </div>
          
            {this.state.popular.length > 0 ? <CardsContainer infoSeries={this.state.popular}/> : <h3>Cargando...</h3> }

          </div>

          <div className="categoria">
            <div className="titulosHome">
              <h3 className="titulo">TOP RATED</h3> 
              <Link to={`/top_rated`}><p className="titulo"> <u>More titles</u></p></Link>
            </div>
          
            {this.state.top_rated.length > 0 ? <CardsContainer infoSeries={this.state.top_rated}/> : <h3>Cargando...</h3> }
          
          </div>
        </main>

    ) 
  }
}

export default Home;
