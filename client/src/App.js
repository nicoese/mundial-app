import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from './components/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </>
  </BrowserRouter>
  );
}

export default App;
