import React, { Component } from "react";
import './Detail.css';
import Loader from "../../components/Loader/Loader"

let imagen = 'https://image.tmdb.org/t/p/w500';

class DetailMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clase: "fa-solid fa-heart fa-xl",
      favoritos: []
    }
  }

  componentDidMount() {
    let arrayFavoritos = []
        let recuperoStorage = localStorage.getItem('favoritosMovie');

        if (recuperoStorage != null){
            arrayFavoritos = JSON.parse(recuperoStorage);

            // Si está el id cambio el texto del botón
            if (arrayFavoritos.includes(this.props.match.params.id)) {
                this.setState({
                  clase: "fa-solid fa-heart fa-xl enFav"
                })
            }
            
        }
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
  modificarFavoritos(id){

    let arrayFavoritos = []
    let recuperoStorage = localStorage.getItem('favoritosMovie');
    
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
    localStorage.setItem('favoritosMovie', arrayFavoritosAString)

    console.log(localStorage)


}
  render() {
    console.log(this.state.movie)
    return (
        <main className = "detailContainer">
            {this.state.movie ? 
                ( <React.Fragment>
                  <h1 className="tituloDetail detailSeries"> {this.state.movie.title}</h1>

                  <section className="seccionFav">            
                      <article className="artFav">
                      <a className="buttonDetail" onClick={()=> this.modificarFavoritos(this.props.match.params.id)}> <i className={this.state.clase}/></a>
                      </article>
                  </section>

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
                      </article>

                  </section>
                  
                  

              </React.Fragment>) : 
            (<Loader/>)}
        </main>
      )
  }
}

export default DetailMovie;

