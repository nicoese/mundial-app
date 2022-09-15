
import { useDispatch } from "react-redux";
/* import { getState } from "./redux/actions"; */
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.css";


function App() {
  const dispatch = useDispatch();
{/* <div className="App">
        <h1>MUNDIAL</h1>
        <button onClick={() => dispatch(getState())}>test</button>
      </div> */}
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />

        <Route exact path="/home" component={NavBar} />
      </Switch>
      

    </BrowserRouter>
  );
}

export default App;
