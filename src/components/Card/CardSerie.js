import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Card.css';

let imagen = 'https://image.tmdb.org/t/p/w342';

class CardSerie extends Component {
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
        let recuperoStorage = localStorage.getItem('favoritosSerie');

        if (recuperoStorage != null){
            arrayFavoritos = JSON.parse(recuperoStorage);

            
            // Si está el id cambio el texto del botón
            if (arrayFavoritos.includes(this.props.contentSerie.id)) {
                this.setState({
                    clase: "fa-solid fa-heart enFav",
                })
            }
            
        }
    }
    metodoVerMas(){
        if(this.state.masInfo === 'SHOW INFO'){
            this.setState({
                masInfo: 'HIDE INFO'
            })
        } else{
            this.setState({
                masInfo: 'SHOW INFO'
            })
        }
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
                clase: "fa-solid fa-heart",
            })


        } else {
            arrayFavoritos.push(id);
            this.setState({
                clase: "fa-solid fa-heart enFav",
            })
        }

        //Subirlo a local storage stringifeado
        let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
        localStorage.setItem('favoritosSerie', arrayFavoritosAString)

        console.log(localStorage)


    }

    render(){

        return (
            <article className='pelicula'>
                {/* {console.log(this.props.contentSerie.name)} */}
                <Link to={`/serieDetail/id/${this.props.contentSerie.id}`}>
                    <img className='poster posterEvento' src={imagen + this.props.contentSerie.poster_path} alt={this.props.contentSerie.name}/>
                </Link>
                <div className="tituloCard">
                    <Link to={`/serieDetail/id/${this.props.contentSerie.id}`} >
                    {this.props.contentSerie.name}</Link>
                </div>
                <br/>
                <div className='containerButton'>
                    <a onClick={() => this.metodoVerMas()}> {this.state.botonInfo}</a>
                    <a className='button' onClick={()=> this.modificarFavoritos(this.props.contentSerie.id)} type='button'> <i className={this.state.clase}/></a>
                </div>
              {this.state.masInfo === "SHOW INFO" ?  false : <p>{this.props.contentSerie.overview}</p>}
              
                
            </article>
            
        )
    }
}
 export default CardSerie