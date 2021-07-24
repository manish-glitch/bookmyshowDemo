import axios from "axios"

import HomePage from "./pages/Home.page"
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";
import Sports from "./pages/Sports.page";


//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
//axios default settings
axios.defaults.baseURL ="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]= process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage}/>
      <MovieHOC path="/movie/:id" exact component={Movie}/>
      <DefaultHOC path="/plays" exact component={Plays}/>
      <DefaultHOC path="/sports" exact component={Sports}/>
    </>
  );
}

export default App;
