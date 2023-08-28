import React, { Component } from "react";
import './Home.css'

class Home extends Component {
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

export default Home;
