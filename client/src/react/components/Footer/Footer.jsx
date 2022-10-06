import React from 'react';
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
                 </ul>
                </div>

                <div className={s.divOneTwo}>
                 <ul>
                    <Link to={'/nosotros'}><li>Nosotros</li></Link>
                    <Link to={'/blogInfo'}><li>Info</li></Link>
                </ul>
                </div>

                <div className={s.divTwo}>
                <a href="https://es-la.facebook.com/" target={'_blank'}><FaFacebook className={s.icoFace}/></a>
                <a href="https://www.instagram.com/" target={'_blank'}><AiFillInstagram className={s.icoIns}/></a>
                <a href="https://github.com/nicoese/mundial-app" target={'_blank'}> <AiFillGithub className={s.icoGit}/></a>
                <a href="https://www.youtube.com/" target={'_blank'}><AiFillYoutube className={s.icoYou}/></a>
                <a href="https://www.linkedin.com/" target={'_blank'}><AiFillLinkedin className={s.icoLink}/></a> 
                </div>

                <div className={s.divThree}>
                 <ul>
                    <Link to={'/profile'}><li>Perfil</li></Link>
                    <a href="mailto:mundiapp.henry@gmail.com">Contacto</a>
                 </ul>
                </div>

                <div className={s.divThreeTwo}>
                 <ul>
                    <Link to={'/wishlist'}><li>Favoritos</li></Link>
                    <Link to={'/frequentQuestions'}><li>FAQ</li></Link>
                </ul>
                </div>

            </div>

            <div className={s.divCopyright}>
              <p>© 2022 Todos los Derechos Reservados | <b>Mundi App</b></p>
            </div>
        </div>
    )
}