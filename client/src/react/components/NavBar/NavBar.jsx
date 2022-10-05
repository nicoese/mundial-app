import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuth0 } from '@auth0/auth0-react';
import './NavBar.css'
import {useNavigate} from "react-router";
import {SearchBar} from "../../elements/SearchBar";
import ProfileWidget from '../ProfileWidget/ProfileWidget';
import MiniSpinner from '../MiniSpinner/MiniSpinner';
import { useDispatch, useSelector } from 'react-redux';
import {clearProductsError, getByName, setCurrentProducts} from '../../../redux/actions';
import { useEffect } from 'react';

const NavBar = () => {

  const {user , isLoading} = useAuth0()
  const navigate = useNavigate()
  const prods = useSelector(state=> state.products)
  const dispatch = useDispatch()

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

  useEffect(()=>{

  },[dispatch, prods])

  const handleClick = ()=>{
    let name = ''

    dispatch(clearProductsError())

    dispatch(getByName(name))

    delay(500).then(()=>{
      dispatch(setCurrentProducts())
    })
    
    navigate('/products')
  }

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  return (
    <>
      <header>
        <nav className="navbar-ctn shadow-md">
          <h1 onClick={handleClick} className="navbar-title">MundiApp</h1>
          <ul className="navbar-ul">
            <Link to={"/products"} onClick={handleClick} className="navbar-a"><li className="navbar-li">Inicio</li></Link>
            <Link to={"/cart"} className="navbar-a"><li className="navbar-li">Carrito</li></Link>
            <Link to={'/nosotros'} className="navbar-a"><li className="navbar-li">Nosotros</li></Link>
            <Link to={'/blogInfo'} className="navbar-a"><li className="navbar-li">Info</li></Link>
          </ul>

          <SearchBar />
          
          {isLoading? <MiniSpinner/>:<ProfileWidget/>}

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