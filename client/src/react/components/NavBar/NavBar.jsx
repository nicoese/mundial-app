import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { useAuth0 } from '@auth0/auth0-react';
import './NavBar.css'
import {useNavigate} from "react-router";
import {SearchBar} from "../../elements/SearchBar";
import ProfileWidget from '../ProfileWidget/ProfileWidget';

const NavBar = () => {


  const {user} = useAuth0()
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

  
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();


  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  return (
    <>
      <header>
        <nav className="navbar-ctn shadow-md">
          <h1 onClick={(ev) => navigate('/')} className="navbar-title">MundiApp</h1>
          <ul className="navbar-ul">
            <Link to={"/products"} className="navbar-a"><li className="navbar-li">Inicio</li></Link>
            <Link to={"/cart"} className="navbar-a"><li className="navbar-li">Carrito</li></Link>
            <Link to={'/nosotros'} className="navbar-a"><li className="navbar-li">Nosotros</li></Link>
            <Link to={'/blogInfo'} className="navbar-a"><li className="navbar-li">Info</li></Link>
          </ul>

          <SearchBar />
          
          <ProfileWidget/>

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


export default NavBar;