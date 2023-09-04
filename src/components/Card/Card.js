import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };
    render(){
        return (
            <article className='pelicula'>
                {console.log(this.props.contentMovie.name)}
                <a href=''>
                    <img className='poster posterEvento' src={this.props.contentMovie.poster_path} alt=''/>
                </a>
                <a href=''>
                {this.props.contentMovie.name}
                </a>
                
            </article>
        )
    }
}
 export default Card

