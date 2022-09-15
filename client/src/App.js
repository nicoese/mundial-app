
import "./App.css";
import { useDispatch } from "react-redux";
import { getState } from "./redux/actions";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./components/Landing";

function App() {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
      <div className="App">
        <h1>MUNDIAL</h1>
        <button onClick={() => dispatch(getState())}>test</button>
      </div>
    </BrowserRouter>
  );
}

export default App;
