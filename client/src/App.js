import './App.css';
import {useDispatch} from "react-redux";
import {getState} from "./redux/actions";

function App() {

    const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>MUNDIAL</h1>
        <button onClick={() => dispatch(getState())} >test</button>
    </div>
  );
}

export default App;
