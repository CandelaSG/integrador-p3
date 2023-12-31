import React, {Component} from 'react';
import CardMovie from '../Card/CardMovie';
import CardSerie from '../Card/CardSerie';
import './CardsContainer.css';
class CardsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render(){
    console.log(this.props.infoMovies);
        return(
            <section className='containerCards'>
                
                {this.props.infoMovies ?
                this.props.infoMovies.map((pelicula , idx) =>{
                    if (idx < 6) {
                       return (<CardMovie key={pelicula.title + idx} contentMovie={pelicula} />
                        )
                    }
                    })

                : false } 

                {this.props.infoSeries ?
                    this.props.infoSeries.map((serie , idx) =>{
                        if (idx < 6) {
                            return (<CardSerie  key={serie.name + idx}  contentSerie={serie}/>
                            )
                        }    
                    })

                : false } 

                {this.props.verMasMovies ?
                    this.props.verMasMovies.map((pelicula , idx) =>
                        <CardMovie key={pelicula.title + idx} contentMovie={pelicula} />
                        )

                : false } 

                {this.props.verMasSeries ?
                    this.props.verMasSeries.map((serie , idx) =>
                        <CardSerie  key={serie.name + idx}  contentSerie={serie}/>       
                    )
                    
                : false } 
            </section>
        )
    }
}

export default CardsContainer