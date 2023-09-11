import React, {Component} from "react";

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valorInput:""
        }
    };
   
  detenerDefault(evento) {
    evento.preventDefault();
  }

  guardarInput(evento) {
    this.setState(
      {
        valorInput: evento.target.value,
      },
      () => this.props.filtro(this.state.valorInput)
    );
  }

  render() {
    return (
      <form onSubmit={(evento) => this.detenerDefault(evento)}>
        <input
          type="text" 
          onSubmit={(evento) => this.guardarInput(evento)}
          value={this.state.valorInput}
          className="buscador"
          name="busqueda"
          placeholder="  Search movies, series..."
        />
      </form>
    );
  }}

export default Buscador 