import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {getAllProducts, getByName, setCurrentProducts} from "../../../redux/actions";
import { HiSearch } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuth0 } from '@auth0/auth0-react';


import './NavBar.css'
import {useNavigate} from "react-router";
import {SearchBar} from "../../elements/SearchBar";

const NavBar = () => {
  // const dispatch = useDispatch();
  // const [name, setName] = useState("");
  const navigate = useNavigate()

  /* funcion para el menu desplegable */
  let click = false
  const toggleMenu = ()=>{
    click = !click
  
    if(click){
      let menuIcon = document.querySelector('.navbar-ul-toggle')
      menuIcon.setAttribute('class', 'active')
    } else{
      let menuIcon = document.querySelector('.active')
      menuIcon.setAttribute('class', 'navbar-ul-toggle')
    }
  }
  /* funcion para el menu desplegable */

  // function handleInputChange(e) {
  //   setName(e.target.value);
  // }
  
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // console.log(name)
  //   dispatch(getByName(name));
  //
  //   delay(1000).then(r => {
  //     dispatch(setCurrentProducts(1))
  //     setName("");
  //     navigate('/products')
  //   })
  //
  // }
  //
  // function delay(time) {
  //   return new Promise(resolve => setTimeout(resolve, time));
  // }

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <>
    <header>
        <nav className="navbar-ctn">
          <h1 onClick={(ev) => navigate('/')} className="navbar-title">MundiApp</h1>
          <ul className="navbar-ul">
            <Link to={"/products"} className="navbar-a"><li className="navbar-li">Inicio</li></Link>
            <Link to={"/cart"} className="navbar-a"><li className="navbar-li">Carrito</li></Link>
            <Link className="navbar-a"><li className="navbar-li">Productos</li></Link>
            <Link className="navbar-a"><li className="navbar-li">Contacto</li></Link>
          </ul>
          {/*<div className="searchBar_search">*/}
          {/*      <form onSubmit={handleSubmit}>*/}
          {/*        <input*/}
          {/*            type="text"*/}
          {/*            placeholder="Search..."*/}
          {/*            value={name}*/}
          {/*            onChange={handleInputChange}*/}
          {/*        />*/}
          {/*        <div className="searchBar_btn">*/}
          {/*      <button className="search_btn-submit">*/}
          {/*        <HiSearch size={23}/>*/}
          {/*      </button>*/}
          {/*    </div>*/}
          {/*  </form>*/}
          {/*</div>*/}
          <SearchBar />
          <AiOutlineMenu size={28} className="navbar-icon" onClick={()=> toggleMenu()}/>
        </nav>
      </header>
      <ul className="navbar-ul-toggle">
        <Link className="navbar-a-sm"><li className="navbar-li_a">Inicio</li></Link>
        <Link to={'/nosotros'} className="navbar-a-sm"><li className="navbar-li_a">Nosotros</li></Link>
        <Link className="navbar-a-sm"><li className="navbar-li_a">Productos</li></Link>
        <Link className="navbar-a-sm"><li className="navbar-li_a">Contacto</li></Link>
      </ul>
    </>
  )
}

export default NavBar