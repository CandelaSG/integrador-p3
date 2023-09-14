import React, { Component } from "react";
import './Home.css'
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SearchHome from "../../components/Search/SearchHome";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcoming:[],
      popular:[]
    };
  }

  componentDidMount() {
    // MOVIES
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          upcoming : data.results
        })
      })
      .catch((error) => console.log("El error es: " + error));
    
    // SERIES
      fetch(`https://api.themoviedb.org/3/tv/popular?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) =>{

        this.setState({
          popular : data.results
        })
      })
      .catch((error) => console.log("El error es: " + error));

  }
  

  render() {
    return(
        <main className="homeMain">
          <SearchHome/>
          <div className="categoria">
            <h2 className="tituloResult">MOVIES</h2>
              <div className="titulosHome">
              <Link to={`/upcoming`}><h3 className="titulo">UPCOMING</h3> </Link>
                <Link to={`/upcoming`}><p className="titulo"> <u>More titles</u></p></Link>
              </div>
              ( {this.state.upcoming.length > 0 ? <CardsContainer infoMovies={this.state.upcoming}/> : <Loader/> })
          </div>
          
          <h2 className="tituloResult">SERIES</h2>

          <div className="categoria">
            <div className="titulosHome">
            <Link to={`/popular`}><h3 className="titulo">POPULAR</h3> </Link>
              <Link to={`/popular`}><p className="titulo"> <u>More titles</u></p></Link>
            </div>
          
            ({this.state.popular.length > 0 ? <CardsContainer infoSeries={this.state.popular}/> : <Loader/> })

          </div> 
        </main> 
    ) 
  }
}

export default Home;
