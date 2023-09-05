import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };
    render(){
        console.log(this.props.contentMovie);
        return (
            <article className='pelicula'>
                {console.log(this.props.contentMovie.title)}
                <a href=''>
                    <img className='poster posterEvento' src= 'https://image.tmdb.org/t/p/w500/mS5SLxMYcKfUxA0utBSR5MOAWWr.jpg'  alt={this.props.contentMovie.title}/>
                </a>
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

