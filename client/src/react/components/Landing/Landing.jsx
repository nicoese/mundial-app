import React from "react";
import imgLanding from '../img/imgLanding.jpeg'
import {Link} from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import {BsCheck2Circle} from "react-icons/bs";
import {useAuth0} from "@auth0/auth0-react";
import swal from 'sweetalert'
import "./Landing.css";


const Landing = () => {

    let click = false

    const toggleMenu = () => {
        click = !click

        if (click) {
            let menuIcon = document.querySelector('.nav-ul-toggle')
            menuIcon.setAttribute('class', 'active')
        } else {
            let menuIcon = document.querySelector('.active')
            menuIcon.setAttribute('class', 'nav-ul-toggle')
        }
    }

    function delay(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }


    const {loginWithRedirect, isAuthenticated, logout, user} = useAuth0();

    console.log(user && user.picture)

    return (


        <>
            <header>
                <nav className="nav-ctn">
                    <h1 className="nav-title">MundiApp</h1>
                    <ul className="nav-ul">
                        <Link to={'products'} className="nav-a">
                            <li className="nav-li">Inicio</li>
                        </Link>
                        <Link to={'/nosotros'} className="nav-a">
                            <li className="nav-li">Nosotros</li>
                        </Link>
                        <Link to='/blogInfo' className="nav-a">
                            <li className="nav-li">info</li>
                        </Link>
                        {/*{*/}
                        {/*    !isAuthenticated && <li onClick={logout} className="li-inicioSesion">Cerrar Sesion</li> :*/}
                        {/*        <li onClick={loginWithRedirect} className="li-inicioSesion">Login</li>*/}
                        {/*}*/}

                        {!isAuthenticated && <li onClick={loginWithRedirect} className="li-inicioSesion">Login</li>}

                        {
                            isAuthenticated && user && <div className={'flex '}>
                                <img className={'w-10 rounded-md'} src={user.picture} alt=""/>


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
                                    className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                    focus:ring-blue-300 font-medium
                    rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button"><svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none"
                                                       stroke="currentColor" viewBox="0 0 24 24"
                                                       xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                </button>
                                <div id="dropdown"
                                     className="hidden absolute z-10 w-30 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownDefault">
                                        <li>
                                            <Link>
                                                <a className="block py-2 px-4 hover:bg-gray-100
                                        dark:hover:bg-gray-600 dark:hover:text-white">Perfil</a>
                                            </Link>
                                        </li>
                                        <li >
                                            <Link>
                                                <a className="block py-2 px-4 hover:bg-gray-100
                                        dark:hover:bg-gray-600 dark:hover:text-white">Mis compras</a>
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




                    </ul>




                    <AiOutlineMenu size={28} className="nav-icon" onClick={() => toggleMenu()}/>

                </nav>



            </header>
            <ul className="nav-ul-toggle">
                <Link className="nav-a-sm">
                    <li className="nav-li_a">Inicio</li>
                </Link>
                <Link className="nav-a-sm">
                    <li className="nav-li_a">Nosotros</li>
                </Link>
                <Link className="nav-a-sm">
                    <li className="nav-li_a">Productos</li>
                </Link>
                <Link className="nav-a-sm">
                    <li className="nav-li_a">Info</li>
                </Link>


            </ul>

            <section>

                <div className="hero-ctn">
                    <div className="hero-txt-btns">
                        <h2>Venimos a entregarte </h2>
                        <span className="hero-spn">lo mejor del mundial</span>
                        <p className="hero-p">Si sos un apasionado del futbol y principalmente del mundial, estas en el
                            lugar correcto. Vas a poder conseguir los mejores productos al alcance de un solo click!</p>
                        <div className="btns-ctn">
                            <Link>
                                <button className="hero-btn">Registrarse</button>
                            </Link>
                            <Link to={'products'}>
                                <button className="hero-btn btn-s">Ver Productos</button>
                            </Link>
                        </div>
                        <div className="check-icons">
                            <div className="chek">
                                <BsCheck2Circle size={25} className='check-icon'/>
                                <p className="check-p">Indumentaria oficial de mundial Qatar 2022</p>
                            </div>
                        </div>
                    </div>

                    <div className="hero-img">
                        <img src={imgLanding} alt=""/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Landing;