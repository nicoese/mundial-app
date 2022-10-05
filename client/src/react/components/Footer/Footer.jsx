import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram, AiFillGithub, AiFillYoutube, AiFillLinkedin} from 'react-icons/ai'
import s from './Footer.module.css'
import pic1 from '../../../img/fondo-world-cup.jpg'

export default function Footer(){

    return(
        <div className={s.divFooter}>
            
            <div className={s.divLinks}>

                <div className={s.divTwo}>
                <FaFacebook className={s.icoFace}/>
                <AiFillInstagram className={s.icoIns}/>
                <AiFillGithub className={s.icoGit}/>
                <AiFillYoutube className={s.icoYou}/>
                <AiFillLinkedin className={s.icoLink}/>
                </div>

                <div className={s.divOne}>
                 <ul>
                    <Link to={'/nosotros'}><li>Nosotros</li></Link>
                    <Link to={'/blogInfo'}><li>Sobre el mundial</li></Link>
                    <Link to={'/FaQ'}><li>Preguntas frecuentes</li></Link>
                   // <Link to={'/profile'}><li>Perfil</li></Link>
                   // <Link to={'/profile/data'}><li>Datos Personales</li></Link>
                   // <Link to={'/wishlist'}><li>Favoritos</li></Link>
                   // <Link to={'/frequentQuestions'}><li>Preguntas frecuentes</li></Link> 
                 </ul>
                </div>

                <div className={s.divThree}>
                    <p>Desarrollado por</p>
                    <ul>
                        <img src={pic1} alt='Mariano Kuran' />
                        <Link to={'/nosotros'}><label>Mariano Kuran</label></Link>
                        <img src={pic1} alt='Gaston Prataviera' />
                        <Link to={'/nosotros'}><label>Gaston Prataviera</label></Link>
                        <img src={pic1} alt='Nicolas Salinas' />
                        <Link to={'/nosotros'}><label>Nicolas Salinas</label></Link>
                        <img src={pic1} alt='Emiliano Larrosa' />
                        <Link to={'/nosotros'}><label>Emiliano Larrosa</label></Link>
                        <img src={pic1} alt='Nicolas Larrosa' />
                        <Link to={'/nosotros'}><label>Nicolas Larrosa</label></Link>
                    </ul>
                </div>

            </div>

            <div className={s.divCopyright}>
              <p>© 2022 Todos los Derechos Reservados | <b>Mundi App</b></p>
            </div>
        </div>
    )
}