import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <li
        className="li-inicioSesion"
        onClick={() =>
            logout({
            returnTo: window.location.origin,
          })
        }
        >
        Cerrar Sesion
      </li>
)}

export default LogoutButton