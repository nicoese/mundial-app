
import './App.css';
import './assets/main.css'
import './assets/tailwind.css'
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getAllProducts, setCurrentProducts} from "./redux/actions";
import Landing from "./react/components/Landing/Landing.jsx";
import {Products} from "./react/components/Products";
import {Navigate} from "react-router";

function About() {
    return 'about';
}

function App(){


    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getAllProducts())
        // dispatch(shuffleProducts())

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
