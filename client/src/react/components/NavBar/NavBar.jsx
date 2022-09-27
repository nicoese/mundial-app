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

  const {user} = useAuth0()

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

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

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











          {!isAuthenticated && <div onClick={loginWithRedirect} className="li-inicioSesion mr-[7%]">Login</div>}

          {
            isAuthenticated && user && <div className={'flex '}>
              <img onClick={() => navigate('/profile')} className={'w-10 rounded-full hover:border-red-500 hover:border-2 cursor-pointer'} src={user.picture} alt=""/>


            </div>
          }
          { isAuthenticated && user &&
          <div>
            <button
                onClick={() => {
                  const dropdown = document.getElementById('dropdown')
                  if (dropdown){
                    dropdown.className = dropdown.className.replace('hidden', '')
                  }
                }}

                onBlur={() => {
                  delay(100)
                      .then(() => {
                        const dropdown = document.getElementById('dropdown')
                        if (dropdown){
                          dropdown.className = `hidden ${dropdown.className}`
                        }
                      })

                }}

                id="dropdownDefault" data-dropdown-toggle="dropdown"
                className="focus:ring-4 focus:outline-none
                    focus:ring-red-300
                    rounded-full text-xl pr-3.5 py-1 px-2 mr-28 text-center inline-flex items-center dark:bg-blue-600
                    dark:hover:bg-red-700 dark:focus:ring-red-800"
                type="button"><svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none"
                                   stroke="currentColor" viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
            </button>
            <div id="dropdown"
                 className="hidden absolute z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefault">
                <li >
                  <Link to={'/profile'}>
                    <a className="block py-2 px-4 hover:bg-gray-100
                                        dark:hover:bg-gray-600 dark:hover:text-white">Perfil</a>
                  </Link>
                </li>
                <li >
                  <Link to={'/cart'}>
                    <a className="block py-2 px-4 hover:bg-gray-100
                                        dark:hover:bg-gray-600 dark:hover:text-white">Mi carrito</a>
                  </Link>
                </li>
                <li >
                  <Link to={'/wishlist'}>
                    <a className="block py-2 px-4 hover:bg-gray-100
                                        dark:hover:bg-gray-600 dark:hover:text-white">Favoritos</a>
                  </Link>
                </li>

                <li onClick={() => {
                  logout()
                }}>
                  <Link>

                    <a onClick={() => {
                      logout()
                    }} className="block py-2 px-4 hover:bg-gray-100
                                        dark:hover:bg-gray-600 dark:hover:text-white">Salir</a>
                  </Link>
                </li>

              </ul>
            </div>

          </div>

          }








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