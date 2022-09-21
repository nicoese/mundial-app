
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
import Info from "./Componentes/Info"

function About() {
    return 'about';
}



function App(){


    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getAllProducts())
        // dispatch(shuffleProducts())

        delay(1000).then(e => {
            dispatch(setCurrentProducts())
        })

    }, [dispatch])

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    return <div className="App flex flex-col justify-center">

                <Routes>
                    <Route exact path={"/"} element={<Landing />} />
                    <Route exact path={'/products'} element={<Products />}/>
                    <Route path={'/about'} element={<About />}/>
                    <Route path={'/redirect'} element={<Navigate />}/>
                    <Route path={'/blogInfo'} element={<Info />}/>
                </Routes>

        </div>
}

export default App;
