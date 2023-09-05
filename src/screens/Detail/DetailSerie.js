import React, { Component } from "react";
import './Detail.css'

let imagen = 'https://image.tmdb.org/t/p/w500';

class DetailSerie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let serieId = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/tv/${serieId}?api_key=0c5fb97f0c55576b638b49d73fa8d73e&language=en-US`)
    .then((response) => response.json())
    .then((data) =>
        this.setState({
          serie: data,
        })
      )
    .catch((error) => console.log("El error es: " + error));

  }

  render(){
    {console.log(this.state.serie);}
    return (
        <main>
            {this.state.serie === undefined ? 
                (<h4>Cargando...</h4>) : 
                (
                    <React.Fragment>
                        <h1 className="tituloDetail detailSeries"> {this.state.serie.name}</h1>

                        <section className="infoContainer infoSeries">
                            <article className="conteinerPoster">
                                <img className="posterDetail" src={imagen + this.state.serie.poster_path} alt={this.state.serie.name}/>             
                            </article>

                            <article className="infoDetail">
                                <ul className="listaDetail">
                                    <li><strong className="decoracion">Release date: </strong> {this.state.serie.first_air_date}</li>
                                    <li><strong className="decoracion">Genres: </strong></li>
                                    <li><strong className="decoracion">Episode running time:</strong>  {this.state.serie.episode_run_time} minutes</li>
                                    <li><strong className="decoracion">Qualification:</strong> {this.state.serie.vote_average} <i className="fa-solid fa-star"></i></li> 
                                </ul> 
                            
                            
                                <p className="sinopsis">{this.state.serie.overview}</p>   
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

                    </React.Fragment>
            
            )}
        </main>
      )
  }

}

export default DetailSerie;