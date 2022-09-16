
import './App.css';
import './assets/main.css'
import './assets/tailwind.css'
import {BrowserRouter, Route, Link, Routes, Navigate} from "react-router-dom";
import {ProductsContainer} from "./react/components/ProductsContainer";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getAllProducts, setCurrentProducts, shuffleProducts} from "./redux/actions";
import {useNavigate} from "react-router";
// import Landing from "./react/components/Landing/Landing.jsx";
import Landing from "./react/components/Landing/Landing.jsx";
import {Products} from "./react/components/Products";

function About() {
    return 'about';
}

function App(){


    const dispatch = useDispatch()
    /* const navigate = useNavigate() */

    useEffect(async () => {
        await dispatch(getAllProducts())
        // dispatch(shuffleProducts())
        dispatch(setCurrentProducts())
    }, [])

    // return <div className="App flex flex-col items-center">
    return <div className="flex flex-col justify-center">

                <Routes>
                    <Route exact path={"/"} element={<Landing />} />
                    <Route exact path={'/products'} element={<Products />}/>
                    <Route path={'/about'} element={<About />}/>
                    <Route path={'/redirect'} element=<Navigate to={'/about'}/> />
                </Routes>

        </div>

}

export default App;
