import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import Favorites from "./screens/Favorites/Favorites";
import VerTodoUpcoming from "./screens/VerTodo/VerTodoUpcoming";
import VerTodoPopular from "./screens/VerTodo/VerTodoPopular";
import DetailMovie from "./screens/Detail/DetailMovie";
import DetailSerie from "./screens/Detail/DetailSerie";
import Notfound from "./screens/NotFound/NotFound";
import SearchResults from "./screens/SearchResults/SearchResults";


import { Route, Switch} from 'react-router-dom';


function App() {
  
  
  return (
    <React.Fragment>
      <Navbar/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/SearchResults/:query"  component={SearchResults}/>
          <Route path="/upcoming" component={VerTodoUpcoming}/>
          <Route path="/popular" component={VerTodoPopular}/>
          <Route path="/favorites" component={Favorites}/>
          <Route path="/movieDetail/id/:id" component={DetailMovie}/>
          <Route path="/serieDetail/id/:id" component={DetailSerie}/>
          <Route path="" component={Notfound}/>
        </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
