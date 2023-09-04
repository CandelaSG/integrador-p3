import React, { Component } from "react";
import './ResultadoBusqueda.css'

class ResultadoBusqueda extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    fetch("")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
        })
      )
      .catch((error) => console.log("El error es: " + error));
  }

  render() {
    console.log(this.state.personaje);
    return 
  }
}

export default ResultadoBusqueda;
