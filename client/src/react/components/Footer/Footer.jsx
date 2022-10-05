import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram, AiFillGithub, AiFillYoutube, AiFillLinkedin} from 'react-icons/ai'
import s from './Footer.module.css'

export default function Footer(){

    return(
        <div className={s.divFooter}>
            
            <div className={s.divLinks}>
                <div className={s.divOne}>
                 <ul>
                    <Link to={'/products'}><li>Inicio</li></Link>
                    <Link to={'/cart'}><li>Carrito</li></Link>
                    <Link to={'/nosotros'}><li>Nosotros</li></Link>
                    <Link to={'/blogInfo'}><li>Info</li></Link>
                 </ul>
                </div>

                <div className={s.divTwo}>
                <FaFacebook className={s.icoFace}/>
                <AiFillInstagram className={s.icoIns}/>
                <AiFillGithub className={s.icoGit}/>
                <AiFillYoutube className={s.icoYou}/>
                <AiFillLinkedin className={s.icoLink}/>
                </div>

                <div className={s.divThree}>
                 <ul>
                    <Link to={'/profile'}><li>Perfil</li></Link>
                    <Link to={'/profile/data'}><li>Datos Personales</li></Link>
                    <Link to={'/wishlist'}><li>Favoritos</li></Link>
                    <Link to={'/frequentQuestions'}><li>Preguntas frecuentes</li></Link> 
                 </ul>
                </div>

            </div>

            <div className={s.divCopyright}>
              <p>© 2022 Todos los Derechos Reservados | <b>Mundi App</b></p>
            </div>
        </div>
    )
}