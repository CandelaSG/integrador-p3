import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Card.css';
let imagen = 'https://image.tmdb.org/t/p/w342';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoFavoritos: 'Agregar a favs 💜',
            favoritos: []
        }
    };
    componentDidMount (){
        let arrayFavoritos = []
        let recuperoStorage = localStorage.getItem('favoritosMovie');

        if (recuperoStorage != null){
            arrayFavoritos = JSON.parse(recuperoStorage);

            
            // Si está el id cambio el texto del botón
            if (arrayFavoritos.includes(this.props.contentMovie.id)) {
                this.setState({
                    textoFavoritos: 'Quitar de favs ❌'
                })
            }
            
        }
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
                textoFavoritos: 'Agregar a favs 💜'
            })


        } else {
            arrayFavoritos.push(id);
            this.setState({
                textoFavoritos: 'Quitar de favs ❌'
            })
        }

        //Subirlo a local storage stringifeado
        let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
        localStorage.setItem('favoritosMovie', arrayFavoritosAString)

        console.log(localStorage)


    }


    render(){
        /* console.log(this.props.contentMovie); */
        return (
            
            <article className='pelicula'>
                {/* {console.log(this.props.contentMovie.title)} */}
                
                <Link to={`/detallePelicula/id/${this.props.contentMovie.id}`}>
                <img className='poster posterEvento' src= {imagen + this.props.contentMovie.poster_path}  alt={this.props.contentMovie.title}/>
                </Link>

                <Link to={`/detallePelicula/id/${this.props.contentMovie.id}`}>
                {this.props.contentMovie.title} 
                </Link>
                {/* <Link to={`/detallePelicula/id/${this.props.contentMovie.id}`}>
                {this.props.contentMovie.overview} 
                </a> */}
                <br/>
                <button onClick={()=> this.modificarFavoritos(this.props.contentMovie.id)} type='button'> {this.state.textoFavoritos} </button>
            </article>
            
        )
    }
}
 export default Card

