import React, {Component} from 'react';
import { Link } from "react-router-dom";

let imagen = 'https://image.tmdb.org/t/p/w500';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };
    
    render(){
        /* console.log(this.props.contentMovie); */
        return (
            
            <article className='pelicula'>
                {/* {console.log(this.props.contentMovie.title)} */}
                
                <Link to={`/detallePelicula/id/${this.props.contentMovie.id}`}>
                <img className='poster posterEvento' src= {imagen + this.props.contentMovie.poster_path}  alt={this.props.contentMovie.title}/>
                </Link>

                <a href=''>
                {this.props.contentMovie.title} 
                </a>
                {/* <a href=''>
                {this.props.contentMovie.overview} 
                </a> */}
            </article>
            
        )
    }
}
 export default Card

