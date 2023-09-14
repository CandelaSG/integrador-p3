import React, { Component } from "react";
import './Detail.css'
import Loader from "../../components/Loader/Loader"

let imagen = 'https://image.tmdb.org/t/p/w500';

class DetailSerie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clase: "fa-solid fa-heart fa-xl",
      favoritos: []
    }
  }
  componentDidMount() {
    let arrayFavoritos = []
        let recuperoStorage = localStorage.getItem('favoritosSerie');

        if (recuperoStorage != null){
            arrayFavoritos = JSON.parse(recuperoStorage);

            // Si está el id cambio el texto del botón
            if (arrayFavoritos.includes(this.props.match.params.id)) {
                this.setState({
                  clase: "fa-solid fa-heart fa-xl enFav"
                })
            }
            
        }
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
  modificarFavoritos(id){

    let arrayFavoritos = []
    let recuperoStorage = localStorage.getItem('favoritosSerie');
    
    if(recuperoStorage !== null){
       arrayFavoritos = JSON.parse(recuperoStorage);   
    }
       
    if(arrayFavoritos.includes(id)){
        //Si el id está en el array queremos sacar el id.
        arrayFavoritos = arrayFavoritos.filter( unId => unId !== id);

        this.setState({
          clase: "fa-solid fa-heart fa-xl"
        })


    } else {
        arrayFavoritos.push(id);
        this.setState({
          clase: "fa-solid fa-heart fa-xl enFav"
        })
    }

    //Subirlo a local storage stringifeado
    let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
    localStorage.setItem('favoritosSerie', arrayFavoritosAString)

    console.log(localStorage)


}
  render(){
    console.log(this.state.serie);
  
    return (
        <main className="detailContainer">
            {this.state.serie ? 
                <React.Fragment>
                <h1 className="tituloDetail detailSeries"> {this.state.serie.name}</h1>

                <section className="seccionFav">            
                    <article className="artFav">
                        <a className="buttonDetail" onClick={()=> this.modificarFavoritos(this.props.match.params.id)}> <i className={this.state.clase}/></a>
                    </article>
                </section>

                <section className="infoContainer infoSeries">
                    <article className="conteinerPoster">
                        <img className="posterDetail" src={imagen + this.state.serie.poster_path} alt={this.state.serie.name}/>             
                    </article>

                    <article className="infoDetail">
                        <ul className="listaDetail">
                            <li><strong className="decoracion">Release date: </strong> {this.state.serie.first_air_date}</li>
                            <li><strong className="decoracion">Genres:</strong> 
                            <ul>
                              {this.state.serie.genres.map((genre,idx)=> <li>{genre.name}</li>)}
                            </ul>
                              </li>
                            <li><strong className="decoracion">Number of episodes:</strong>  {this.state.serie.number_of_episodes}</li>
                            <li><strong className="decoracion">Qualification:</strong> {this.state.serie.vote_average} <i className="fa-solid fa-star"></i></li> 
                        </ul> 
                    
                    
                        <p className="sinopsis">{this.state.serie.overview}</p>   
                        {/* <div className="buttonTrailer">
                            <a className="verTrailer" href="/"> ▶️ Ver Trailer </a> 
                        </div> */}
                    </article>

                </section>
                
                

            </React.Fragment>
                :
                <Loader/>
                }

        </main>
      )
  }

}

export default DetailSerie;