import React, {Component} from 'react';

let imagen = 'https://image.tmdb.org/t/p/w500';

class CardSerie extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };
    render(){
        /* console.log(this.props.contentSerie); */
        return (
            <article className='pelicula'>
                {/* {console.log(this.props.contentSerie.name)} */}
                <a href=''>
                    <img className='poster posterEvento' src={imagen + this.props.contentSerie.poster_path} alt={this.props.contentSerie.name}/>
                </a>
                <a href=''>
                {this.props.contentSerie.name}
                </a>
               {/*  <a href=''>
                {this.props.contentSerie.overview}
                </a> */}
            </article>
            
        )
    }
}
 export default CardSerie