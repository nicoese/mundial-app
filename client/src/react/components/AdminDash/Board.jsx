import React from "react";
import ProfileWidget from "../ProfileWidget/ProfileWidget";
import SideBar from "./SideBar";
import { Outlet } from "react-router";

const Board = () => {
  return ( 
    <>
      <div className="sticky top-0 z-100 w-full h-[70px] bg-[#f6f6f6] shadow-md">
        <div className="flex h-full px-[20px] items-center justify-between">
          <div className="ml-4">
            <h1 className="text-4xl text-[#790729] font-semibold">Mundiapp</h1>
          </div>
          <div className="mr-6">
            <ProfileWidget />
          </div>
        </div>
      </div>
      <div className="flex">
        <SideBar />
        <div className="flex flex-[4] bg-red-200 items-center justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Board;
