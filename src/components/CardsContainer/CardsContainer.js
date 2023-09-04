import React, {Component} from 'react';
import Card from '../Card/Card';
class CardsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };
    componentDidMount(){
        console.log(this.props.info)
    }
    render(){
    
        return(
            <section className='containerHome peliculasPopulares'>
                
                {this.props.info ?
                this.props.info.map((content , idx) =>(
                    <Card 
                    key={content.name + idx}
                    contentMovie={content}
                    />
                ))
            : <h2>Cargando...</h2>}
            </section>
        )
    }
}

export default CardsContainer