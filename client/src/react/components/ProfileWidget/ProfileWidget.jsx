import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

const ProfileWidget = () => {
  const navigate = useNavigate()
  const { isAuthenticated, loginWithRedirect, user, logout } = useAuth0();
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  return (
    <>
      {!isAuthenticated && (
        <div onClick={loginWithRedirect} className="li-inicioSesion">
          Ingresa
        </div>
      )}

      {isAuthenticated && user && (
        <div className={"flex "}>
          <img
            onClick={() => navigate("/profile")}
            className={
              "w-[3.2em] h-[3.2em] rounded-full hover:shadow-[#790729] hover:shadow-sm hover:cursor-pointer"
            }
            src={user.picture || <PersonIcon /> }
            alt="profile picture"
          />
        </div>
      )}
      {isAuthenticated && user && (
        <div>
          <button
            onClick={() => {
              const dropdown = document.getElementById("dropdown");
              if (dropdown) {
                dropdown.className = dropdown.className.replace("hidden", "");
              }
            }}
            onBlur={() => {
              delay(100).then(() => {
                const dropdown = document.getElementById("dropdown");
                if (dropdown) {
                  dropdown.className = `hidden ${dropdown.className}`;
                }
              });
            }}
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="flex items-center focus:outline-none rounded-full"
            type="button"
          >
            <svg
              className="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            id="dropdown"
            className="hidden absolute z-50 w-[7.2em] right-4 top-20 bg-white"
          >
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
              <li>
                <Link to={"/profile"}>
                  <a className="block py-2 px-4 hover:bg-gray-10 hover:font-semibold hover:text-[#790729]">Perfil</a>
                </Link>
              </li>
              <li>
                <Link to={"/cart"}>
                  <a className="block py-2 px-4 hover:bg-gray-10 hover:font-semibold hover:text-[#790729]">Mi carrito</a>
                </Link>
              </li>
              <li>
                <Link to={"/wishlist"}>
                  <a className="block py-2 px-4 hover:bg-gray-10 hover:font-semibold hover:text-[#790729]">Lista de deseos </a>
                </Link>
              </li>

              <li onClick={() => { logout(); }} >
                <Link>
                  <a onClick={() => { logout();}} className="block py-2 px-4 hover:bg-gray-10 hover:font-semibold hover:text-[#790729]">
                    Salir
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileWidget;
