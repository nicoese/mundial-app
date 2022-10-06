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
      {isAuthenticated && user ? (
        <div>
          {/*<button*/}
          {/*  onClick={() => {*/}
          {/*    const dropdown = document.getElementById("dropdown");*/}
          {/*    if (dropdown) {*/}
          {/*      dropdown.className = dropdown.className.replace("hidden", "");*/}
          {/*    }*/}
          {/*  }}*/}
          {/*  onBlur={() => {*/}
          {/*    delay(100).then(() => {*/}
          {/*      const dropdown = document.getElementById("dropdown");*/}
          {/*      if (dropdown) {*/}
          {/*        dropdown.className = `hidden ${dropdown.className}`;*/}
          {/*      }*/}
          {/*    });*/}
          {/*  }}*/}
          {/*  id="dropdownDefault"*/}
          {/*  data-dropdown-toggle="dropdown"*/}
          {/*  className="flex items-center focus:outline-none rounded-full"*/}
          {/*  type="button"*/}
          {/*>*/}
          {/*  <svg*/}
          {/*    className="ml-2 w-4 h-4"*/}
          {/*    aria-hidden="true"*/}
          {/*    fill="none"*/}
          {/*    stroke="currentColor"*/}
          {/*    viewBox="0 0 24 24"*/}
          {/*    xmlns="http://www.w3.org/2000/svg"*/}
          {/*  >*/}
          {/*    <path*/}
          {/*      stroke-linecap="round"*/}
          {/*      stroke-linejoin="round"*/}
          {/*      stroke-width="2"*/}
          {/*      d="M19 9l-7 7-7-7"*/}
          {/*    ></path>*/}
          {/*  </svg>*/}
          {/*</button>*/}
          {/*<div*/}
          {/*  id="dropdown"*/}
          {/*  className="hidden absolute w-[8.5em] mr-[10%] mt-[1%] right-4 top-20 bg-white"*/}
          {/*>*/}
          {/*  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">*/}
          {/*      <Link to={"/profile"}>*/}
          {/*    <li>*/}
          {/*        <a className="block  py-2 px-4 hover:bg-gray-10 hover:font-semibold hover:text-[#790729]">Perfil</a>*/}
          {/*    </li>*/}
          {/*      </Link>*/}
          {/*      <Link to={"/cart"}>*/}
          {/*    <li>*/}
          {/*        <a className="block py-2  px-4 hover:bg-gray-10 hover:font-semibold hover:text-[#790729]">Mi carrito</a>*/}
          {/*    </li>*/}
          {/*      </Link>*/}
          {/*      <Link to={"/wishlist"}>*/}
          {/*    <li>*/}
          {/*        <a className="block py-2  px-4 hover:bg-gray-10 hover:font-semibold hover:text-[#790729]">Lista de deseos </a>*/}
          {/*    </li>*/}
          {/*      </Link>*/}

          {/*      <Link>*/}
          {/*    <li onClick={() => { logout(); }} >*/}
          {/*        <a onClick={() => { logout();}} className="block py-2 px-4 hover:bg-gray-10 hover:font-semibold hover:text-[#790729]">*/}
          {/*          Salir*/}
          {/*        </a>*/}
          {/*    </li>*/}
          {/*      </Link>*/}
          {/*  </ul>*/}
          {/*</div>*/}
          <div className={'flex flex-row justify-between m-3 min-w-[100px]'}>
            <Link to={'/wishlist'}>
              <svg className="w-8 h-8 px-1 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg"

              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </Link>

            <Link to={'/cart'}>
              <svg className="w-8 h-8 px-1 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </Link>

            <Link to={'/logout'}>

              <svg className="w-8 h-8 px-1 hover:text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
            </Link>
          </div>

        </div>
      ):<Link to={'/cart'}>
        <svg className="w-8 h-8 px-1 hover:text-blue-600 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      </Link>}
    </>
  );
};

export default ProfileWidget;
