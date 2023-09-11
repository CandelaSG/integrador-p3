import React, { Component } from "react";
import './Detail.css'

let imagen = 'https://image.tmdb.org/t/p/w500';

class DetailMovie extends Component {
  constructor(props) {
    super(props);
    this.state = false;
  }

  componentDidMount() {
    let movieId = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US`)
    .then((response) => response.json())
    .then((data) =>
        this.setState({
          movie: data,
        })
      )
    .catch((error) => console.log("El error es: " + error));

  }

  render() {
    console.log(this.state.movie)
    return (
        <main>
            {this.state.movie ? 
                ( <React.Fragment>
                  <h1 className="tituloDetail detailSeries"> {this.state.movie.title}</h1>

                  <section className="infoContainer infoSeries">
                      <article className="conteinerPoster">
                          <img className="posterDetail" src={imagen + this.state.movie.poster_path} alt=''/>             
                      </article>

                      <article className="infoDetail">
                          <ul className="listaDetail">
                              <li><strong className="decoracion">Release date: </strong> {this.state.movie.release_date}</li>
                              <li><strong className="decoracion">Genres: </strong>
                              <ul>
                              {this.state.movie.genres.map((genre,idx)=> <li>{genre.name}</li>)}
                              </ul>
                              </li>
                              <li><strong className="decoracion">Running time:</strong>  {this.state.movie.runtime} minutes</li>
                              <li><strong className="decoracion">Qualification:</strong> {this.state.movie.vote_average} <i className="fa-solid fa-star"></i></li> 
                          </ul> 
                      
                      
                          <p className="sinopsis">{this.state.movie.overview}</p>   
                          {/* <div className="buttonTrailer">
                              <a className="verTrailer" href="/"> ▶️ Ver Trailer </a> 
                          </div> */}
                      </article>

                  </section>
                  
                  <section className="seccionFav">            
                      <article className="artFav">
                          <a className="buttonFav clave" href=""> 🤍 Favorites</a>
                      </article>
                  </section>

              </React.Fragment>) : 
            (<h4>Cargando...</h4>)}
        </main>
      )
  }
}

export default DetailMovie;

