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
import Info from "./Componentes/Info"


function About() {
  return "about";
}


}

export default App;
