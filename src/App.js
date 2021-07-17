import {Route} from "react-router-dom"

import HomePage from "./pages/Home.page"

//HOC
import DefaultHOC from "./HOC/Default.HOC";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage}/>
    </>
  );
}

export default App;
