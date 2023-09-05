import React, {Component} from 'react';
import { Link } from "react-router-dom";

let imagen = 'https://image.tmdb.org/t/p/w342';

class CardSerie extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };
    render(){
        console.log(this.props.contentSerie);
        return (
            <article className='pelicula'>
                {/* {console.log(this.props.contentSerie.name)} */}
                <Link to={`/detalleSeries/id/${this.props.contentSerie.id}`}>
                    <img className='poster posterEvento' src={imagen + this.props.contentSerie.poster_path} alt={this.props.contentSerie.name}/>
                </Link>
                <Link to={`/detalleSeries/id/${this.props.contentSerie.id}`}>
                {this.props.contentSerie.name}
                </Link>
               {/*  <Link to={`/detalleSeries/id/${this.props.contentSerie.id}`}>
                {this.props.contentSerie.overview}
                </Link> */}
            </article>
            
        )
    }
}
 export default CardSerie