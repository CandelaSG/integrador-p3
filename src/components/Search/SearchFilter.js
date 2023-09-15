import React, {Component} from "react";
import './Search.css'

class SearchFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          textoFilter: ''
        }
    };
   
  detenerDefault(evento) {
    evento.preventDefault();
    console.log(this.state.filterText);
        this.props.filtrar(this.state.textoFilter);
  }

  guardarInput(evento) {
    this.setState(
      {
        textoFilter: evento.target.value,
      }
    );
  }

  render() {
    return (
      <form class="wrap" onSubmit={(evento) => this.detenerDefault(evento)}>
              <div class="search">
                  <input type="text" class="searchTerm" placeholder="What are you looking for?" onChange={(evento) => this.guardarInput(evento)}
          value={this.state.textoFilter}/>
          <button type="submit" class="searchButton" value='Submit'>
                    <i class="fa fa-search"></i>
                </button>
              </div>
        </form>
    );
  }}

export default SearchFilter;