import React from 'react';
import Linkedin from '../img/linkedin.png'
import GitHub from '../img/github.png'
import n from './Nosotros.module.css'
import {IoMdReturnLeft} from 'react-icons/io'
import {Link} from 'react-router-dom'

export default function nosotros () {
    return (
       <div className={n.contPrincipal} >
        <nav className={n.nav}>
            <Link to='/'>
            <p className={n.titleNav}>MundiApp</p>
            </Link>
            <a href="javascript:history.back()" className={n.atras}><IoMdReturnLeft/></a>
        </nav>
            <hr className={n.hr} width='100%'/>
        <div className={n.sectionOne}>
            <p className={n.title} >Sobre el proyecto</p>
            <div className={n.pDiv}>
            <p className={n.pOne}>Este sitio web es un E-commerce desarrollado para el Proyecto Final del Bootcamp de SoyHenry, la tematica utilizada es el mundial de Qatar 2022.
            </p>
            </div>
        </div>
        <hr className={n.hr} width='35%'/>
        <div className={n.sectionTwo}>
          <h1 className={n.title}>Equipo de Desarrollores</h1>
          <div className={n.divDevelop}>
            <p className={n.titleDev}>Mariano Kuran</p>
            <p className={n.pDevelop}>Full Stack Developers</p>
            <div className={n.divIconos}>
               <a href='' ><img alt='icono linkedin' src={Linkedin} className={n.imgLink}  /></a>
               <a href='' ><img alt='icono github' src={GitHub} className={n.imgGit}  /></a>
            </div>
          </div>
          <div className={n.divDevelop}>
            <p className={n.titleDev}>Gaston Fernandez</p>
            <p className={n.pDevelop}>Full Stack Developers</p>
            <div className={n.divIconos}>
               <a href='' ><img alt='icono linkedin' src={Linkedin} className={n.imgLink} /></a>
               <a href='' ><img alt='icono github' src={GitHub} className={n.imgGit} /></a>
            </div>
          </div>
          <div className={n.divDevelop}>
            <p className={n.titleDev}>Nicolas Larrosa</p>
            <p className={n.pDevelop}>Full Stack Developers</p>
            <div className={n.divIconos}>
               <a href='' ><img alt='icono linkedin' src={Linkedin}  className={n.imgLink} /></a>
               <a href='' ><img alt='icono github' src={GitHub} className={n.imgGit} /></a>
            </div>
          </div>
          <div className={n.divDevelop}>
            <p className={n.titleDev}>Emiliano Larrosa</p>
            <p className={n.pDevelop}>Full Stack Developers</p>
            <div className={n.divIconos}>
               <a href='' ><img alt='icono linkedin' src={Linkedin} className={n.imgLink} /></a>
               <a href='' ><img alt='icono github' src={GitHub} className={n.imgGit} /></a>
            </div>
          </div>
          <div className={n.divDevelop}>
            <p className={n.titleDev}>Nicolas Salinas</p>
            <p className={n.pDevelop}>Full Stack Developers</p>
            <div className={n.divIconos}>
               <a href='' ><img alt='icono linkedin' src={Linkedin} className={n.imgLink} /></a>
               <a href='' ><img alt='icono github' src={GitHub} className={n.imgGit} /></a>
            </div>
          </div>
        </div>
       </div>
    )
}