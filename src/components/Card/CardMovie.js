import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Card.css';
let imagen = 'https://image.tmdb.org/t/p/w342';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clase: "fa-solid fa-heart",
            favoritos: [],
            masInfo: "SHOW INFO",
            botonInfo: <i className= "fa-solid fa-circle-info botonInfo"></i>
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
                    clase: "fa-solid fa-heart enFav"
                })
            }
            
        }
    }
    metodoVerMas(){
        if(this.state.masInfo === 'SHOW INFO'){
            this.setState({
                masInfo: 'HIDE INFO',
            })
        } else{
            this.setState({
                masInfo: 'SHOW INFO',

            })
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
                clase: "fa-solid fa-heart"
            })


        } else {
            arrayFavoritos.push(id);
            this.setState({
                clase: "fa-solid fa-heart enFav"
            })
        }

        //Subirlo a local storage stringifeado
        let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
        localStorage.setItem('favoritosMovie', arrayFavoritosAString)

        console.log(localStorage)


    }


    render(){
        return (
            
            <article className='pelicula'>
                
                <Link to={`/movieDetail/id/${this.props.contentMovie.id}`}>
                <img className='poster posterEvento' src= {imagen + this.props.contentMovie.poster_path}  alt={this.props.contentMovie.title}/>
                </Link>

                <Link to={`/movieDetail/id/${this.props.contentMovie.id}`}>
                {this.props.contentMovie.title} 
                </Link>

                <div className='containerButton'>
                    <a onClick={() => this.metodoVerMas()}> {this.state.botonInfo}</a>
                    <a className='button' onClick={()=> this.modificarFavoritos(this.props.contentMovie.id)} type='button'> <i className={this.state.clase}/> </a>
                </div>
                {this.state.masInfo === "SHOW INFO" ?  false : <p>{this.props.contentMovie.overview}</p>}
            </article>
            
        )
    }
}
 export default Card

