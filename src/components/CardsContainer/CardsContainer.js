import React, {Component} from 'react';
import CardMovie from '../Card/CardMovie';
import CardSerie from '../Card/CardSerie';
class CardsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render(){
    
        return(
            <section className='containerHome peliculasPopulares'>
                
                {this.props.infoMovies ?
                this.props.infoMovies.map((pelicula , idx) =>(
                    <CardMovie 
                    key={pelicula.title + idx}
                    contentMovie={pelicula}
                    />
                ))
            : <h2>Cargando...</h2>}

            {this.props.infoSeries ?
                this.props.infoSeries.map((serie , idx) =>(
                    <CardSerie 
                    key={serie.name + idx}
                    contentSerie={serie}
                    />
                ))
            : <h2>Cargando...</h2>}
            </section>
        )
    }
}

export default CardsContainer