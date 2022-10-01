import React from 'react';
import s from './InfoPersonal.module.css'
import {useAuth0} from "@auth0/auth0-react";
import {Link} from 'react-router-dom'



export default function InfoPersonal(){

    const {user} = useAuth0()
    return(
        <div className={s.king}>
          <div className={s.divPrincipal}>
             <h1 className={s.asd}>Datos Personales</h1>
             <hr className={s.hr1}></hr>

             <form className={s.contForm}>
                 <div className={s.divOne}>
                     <div className={s.divFullname}>
                       <label htmlFor="name">Nombre Completo</label>
                       <input className={s.inpName} type="text" placeholder='Ej: Cosme Fulanito' />
                     </div>
                     <div className={s.divUbication}>
                       <label htmlFor="ubication">Dirección</label>
                       <input className={s.inpUbi} type="text" placeholder='Calle y número' />
                     </div>
                     <div className={s.divCity}>
                       <label htmlFor="city">Ciudad</label>
                       <input className={s.inpCity} type="text" placeholder='Ciudad' />
                     </div>
                     <div className={s.divCountry}>
                       <label htmlFor="country">País</label>
                       <input className={s.inpCountry} type="text" placeholder='País' />
                     </div>
                     <Link to={'/products'}>
                     <button className={s.btnCancelar}>Cancelar</button>
                     </Link>
                 </div>

                 <div className={s.divTwo}>
                     <div className={s.divCorreo}>
                       <label htmlFor="mail">Correo</label>
                       <input className={s.inpEmail} type="email" disabled  placeholder={user && user.email} />
                     </div>
                     <div className={s.divDepartment}>
                       <label htmlFor="departament">Departamento</label>
                       <input className={s.inpDepartment} type="text" placeholder='N° de departamento - Si vivis en casa -> 0' />
                     </div>
                     <div className={s.divCp}>
                       <label htmlFor="cp">C.P</label>
                       <input className={s.inpCp} type="text" placeholder='Código Postal' />
                     </div>
                     <div className={s.divPhone}>
                       <label htmlFor="phone">Telefono</label>
                       <input className={s.inpPhone} type="number" placeholder='Telefono' />
                     </div>
                     <button className={s.btnGuardar}>Guardar</button>
                 </div>
             </form>
          </div>
        </div>
    )
}