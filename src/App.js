import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import Favorito from "./screens/Favorito/Favorito";
<<<<<<< HEAD
import VerTodoUpcoming from "./screens/VerTodo/VerTodoUpcoming";
import VerTodoNowPlaying from "./screens/VerTodo/VerTodoNowPlaying"
import VerTodoPopular from "./screens/VerTodo/VerTodoPopular";
import VerTodoTopRated from "./screens/VerTodo/VerTodoTopRated";
import ResultadoBusqueda from "./screens/ResultadoBusqueda/ResultadoBusqueda";
=======
import VerTodo from "./screens/VerTodo/VerTodo";
>>>>>>> 70dc9b45cb18d8e22f820a441ea9b14b31c32ddf
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
        <Route path="/now_playing" component={VerTodoNowPlaying}/>
        <Route path="/upcoming" component={VerTodoUpcoming}/>
        <Route path="/top_rated" component={VerTodoTopRated}/>
        <Route path="/popular" component={VerTodoPopular}/>
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
