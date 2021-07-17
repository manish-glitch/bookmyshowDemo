import {Route} from "react-router-dom"

import HomePage from "./pages/Home.page"


//HOC
import DefaultHOC from "./HOC/Default.HOC";
import Movie from "./pages/Movie.page";
import MovieHOC from "./HOC/Movie.HOC";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage}/>
      <MovieHOC path="/movie/:id" exact component={Movie}/>
    </>
  );
}

export default App;
