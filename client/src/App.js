import './App.css';
import './assets/main.css'
import './assets/tailwind.css'
import {BrowserRouter, Route, Link, Routes, Navigate} from "react-router-dom";
import {ProductsContainer} from "./react/components/ProductsContainer";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getAllProducts, setCurrentProducts, shuffleProducts} from "./redux/actions";
import {useNavigate} from "react-router";

function About() {
    return 'about';
}

function App() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(async () => {
        await dispatch(getAllProducts())
        // dispatch(shuffleProducts())
        dispatch(setCurrentProducts())
    }, [])

    return (
        <div className="App">
            {/*<BrowserRouter>*/}

                <Routes>
                    <Route exact path={'/products'} element={<ProductsContainer/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/redirect'} element=<Navigate to={'/about'}/> />
                </Routes>
            {/*</BrowserRouter>*/}

        </div>

    );
}

export default App;
