import './App.css';
import './assets/main.css'
import './assets/tailwind.css'
import {Route} from "react-router-dom";
import {ProductsContainer} from "./react/components/ProductsContainer";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getAllProducts, setCurrentProducts, shuffleProducts} from "./redux/actions";

function App() {

    const dispatch = useDispatch()

    useEffect(async () => {
        await dispatch(getAllProducts())
        dispatch(shuffleProducts())
        dispatch(setCurrentProducts())
    }, [])

    return (
        <div className="App">
                <Route exact path={'/'} component={ProductsContainer}/>
        </div>
    );
}

export default App;
