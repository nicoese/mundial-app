import "./App.css";
import "./assets/main.css";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts, setCurrentProducts } from "./redux/actions";
import Landing from "./react/components/Landing/Landing.jsx";
import { Products } from "./react/components/Products";
import Details from "./react/components/Details/Details";
import Cart from "./react/components/Cart/Cart";
import Info from "./Componentes/Info"
import Nosotros from "./Componentes/Nosotros"
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router";
import {NotFound} from "./react/components/Not_Found/Not_Found";
import {Profile} from "./react/components/Profile/Profile";
import {Wishlist} from "./react/components/Wishlist/Wishlist";
import {ProtectedRoutes} from "./react/components/ProtectedRoutes/ProtectedRoutes";


function About() {
  return "about";
}


function App() {
  const dispatch = useDispatch();
  const {isAuthenticated} = useAuth0()
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  return (

    <div className="flex flex-col justify-center">
      <Routes>
        <Route exact path={"/"} element={<Landing />} />
        <Route exact path={"/products"} element={<Products />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/products/:id"} element={<Details />} />
        <Route path={'/blogInfo'} element={<Info />}/>
        <Route path={'/Cart'} element={<Cart />}/>
        <Route path={'/nosotros'} element={<Nosotros />}/>
        <Route path={'/profile'} element={<ProtectedRoutes>
          <Profile />
        </ProtectedRoutes>}/>
        <Route path={'/wishlist'} element={<ProtectedRoutes>
          <Wishlist />
        </ProtectedRoutes>}/>
        <Route path={'*'} element={<NotFound />}/>
       </Routes>
    </div>
  )
}

export default App;
