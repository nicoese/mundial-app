import React from "react";
import imgLanding from '../img/imgLanding.jpeg'
import imgOk from '../img/iconOk.png'
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import swal from 'sweetalert'
import "./Landing.css";



const Landing = () => {

  let click = false

  const toggleMenu = ()=>{
    click = !click
  
    if(click){
      let menuIcon = document.querySelector('.nav-ul-toggle')
      menuIcon.setAttribute('class', 'active')
    } else{
      let menuIcon = document.querySelector('.active')
      menuIcon.setAttribute('class', 'nav-ul-toggle')
    }
  }




  const { loginWithRedirect, isAuthenticated, logout, user  } = useAuth0();

  console.log(user)

  return (

    
    <>

      <header>
        <nav className="nav-ctn">
          <h1 className="nav-title">MundiApp</h1>
          <ul className="nav-ul">
            <Link to={'products'} className="nav-a"><li className="nav-li">Inicio</li></Link>
            <Link to={'/nosotros'} className="nav-a"><li className="nav-li">Nosotros</li></Link>
            <Link to='/blogInfo' className="nav-a"><li className="nav-li">info</li></Link>
            {
              isAuthenticated ? <li onClick={logout} className="li-inicioSesion">Cerrar Sesion</li>:
              <li onClick={loginWithRedirect} className="li-inicioSesion">Iniciar Sesion</li>
              }
          </ul>
          <AiOutlineMenu size={28} className="nav-icon" onClick={()=> toggleMenu()}/>
        </nav>
      </header>
      <ul className="nav-ul-toggle">
        <Link className="nav-a-sm"><li className="nav-li_a">Inicio</li></Link>
        <Link className="nav-a-sm"><li className="nav-li_a">Nosotros</li></Link>
        <Link className="nav-a-sm"><li className="nav-li_a">Productos</li></Link>
        <Link className="nav-a-sm"><li className="nav-li_a">Info</li></Link>
      </ul>

      <section>
        <div className="hero-ctn">
          <div className="hero-txt-btns">
            <h2>Venimos a entregarte </h2>
            <span className="hero-spn">lo mejor del mundial</span>
              <Link to={'products'}><button className="hero-btn btn-s">Ver Productos</button></Link>
            </div>
            <div className="check-icons">
              <div className="chek">
                <BsCheck2Circle size={25} className='check-icon'/>
                <p className="check-p">Indumentaria oficial de mundial Qatar 2022</p>
              </div>
            </div>
          </div>

          <div className="hero-img">
            <img src={imgLanding} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;