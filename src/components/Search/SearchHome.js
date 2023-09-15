import React, {Component} from "react"
import './Search.css'
import { Link } from "react-router-dom";

class SearchHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            result: []
        }
    }
    detenerDefault(evento) {
        evento.preventDefault();
      }
    
    
    saveInput(event){
        this.setState({value: event.target.value})
    }
    render(){
        return(
            <div class="wrap" onSubmit={(evento) => this.detenerDefault(evento)}>
              <div class="search">
                  <input type="text" class="searchTerm" placeholder="What are you looking for?" onChange={(evento) => this.saveInput(evento)}
          value={this.state.value}/>
                  <Link to={`/SearchResults/${this.state.value}`}><button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                </button>
                </Link>
              </div>
            </div>
        )
    }
}
export default SearchHome;

