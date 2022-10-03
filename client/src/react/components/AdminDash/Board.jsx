import React from "react";
import ProfileWidget from "../ProfileWidget/ProfileWidget";
import SideBar from "./SideBar";
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet} from "react-router";
import {Navigate} from 'react-router-dom'
import MiniSpinner from "../MiniSpinner/MiniSpinner";

const Board = () => {

  let {isAuthenticated, user , isLoading} = useAuth0()
  

  return (
    <>
      <div className="sticky top-0 z-100 w-full h-[70px] bg-[#f6f6f6] shadow-md">
        <div className="flex h-full px-[20px] items-center justify-between">
          <div className="ml-4">
            <h1 className="text-4xl text-[#790729] font-semibold">Mundiapp</h1>
          </div>
          <div className="mr-6">
            { isLoading ? <MiniSpinner/>:<ProfileWidget />}
          </div>
        </div>
      </div>
      <div className="flex">
        <SideBar />
        <div className="flex flex-[4] items-center justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Board;
