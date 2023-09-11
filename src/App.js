import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import Favorito from "./screens/Favorito/Favorito";
import VerTodo from "./screens/VerTodo/VerTodo";
import DetailMovie from "./screens/Detail/DetailMovie";
import DetailSerie from "./screens/Detail/DetailSerie";
import Notfound from "./screens/NotFound/NotFound";


import { Link, Route, Switch} from 'react-router-dom';


function App() {
  
  
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Home}/> {/* Tiene que renderizar dos listas, pero terminan en un mismo componente pero Home va pidiendo datos de distintos lados */}
        <Route path="/verTodos/category/:category" component={VerTodo}/>
        <Route path="/favorites" component={Favorito}/>
        <Route path="/detallePelicula/id/:id" component={DetailMovie}/>
        <Route path="/detalleSeries/id/:id" component={DetailSerie}/>
        <Route path="" component={Notfound}/>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
