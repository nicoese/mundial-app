import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";

const ProfileWidget = () => {
  const navigate = useNavigate()
  const { isAuthenticated, loginWithRedirect, user, logout } = useAuth0();
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  return (
    <>
      {!isAuthenticated && (
        <li onClick={loginWithRedirect} className="li-inicioSesion">
          Login
        </li>
      )}

      {isAuthenticated && user && (
        <div className={"flex "}>
          <img
            onClick={() => navigate("profile")}
            className={
              "w-10 rounded-full hover:border-red-500 hover:border-2 cursor-pointer"
            }
            src={user.picture}
            alt=""
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
            className=" text-red  focus:ring-4 focus:outline-none
focus:ring-red-300
rounded-full text-md px-2 py-2 pr-3.5 text-center inline-flex items-center dark:bg-blue-600
dark:hover:bg-red-700 dark:focus:ring-red-800"
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
            className="hidden absolute z-10 w-30 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <Link to={"profile"}>
                  <a
                    className="block py-2 px-4 hover:bg-gray-100
                dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Perfil
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"cart"}>
                  <a
                    className="block py-2 px-4 hover:bg-gray-100
                dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Mi carrito
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"wishlist"}>
                  <a
                    className="block py-2 px-4 hover:bg-gray-100
                dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Lista de deseos
                  </a>
                </Link>
              </li>

              <li
                onClick={() => {
                  logout();
                }}
              >
                <Link>
                  <a
                    onClick={() => {
                      logout();
                    }}
                    className="block py-2 px-4 hover:bg-gray-100
                dark:hover:bg-gray-600 dark:hover:text-white"
                  >
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
