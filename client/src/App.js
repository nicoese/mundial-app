import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import {useDispatch} from "react-redux";
import {getState} from "./redux/actions";

function App() {

    const dispatch = useDispatch()

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
        <h1>MUNDIAL</h1>
        <button onClick={() => dispatch(getState())}>test</button>
      <div/>
    </BrowserRouter>
  );
}

export default App;
