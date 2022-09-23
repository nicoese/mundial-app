import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
      <li
        className="li-inicioSesion"
        onClick={() => loginWithRedirect()}
      >
        Iniciar Sesion
      </li>
)}

export default LoginButton