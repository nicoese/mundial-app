import React from "react";
import ProfileWidget from "../ProfileWidget/ProfileWidget";
import SideBar from "./SideBar";
import Users from "./views/Users";

const Board = () => {
  return ( 
    <>
      <div className="sticky top-0 z-100 w-full h-[50px] bg-[#f6f6f6] shadow-sm">
        <div className="flex h-full px-[20px] items-center justify-between">
          <div>
            <h1>Mundiapp</h1>
          </div>
          <div>
            <ProfileWidget />
          </div>
        </div>
      </div>
      <div className="flex">
        {/* <div className="sticky top-[50px] flex flex-1 z-50 h-[10000px] bg-green-300"> */}
          <SideBar />
        {/* </div> */}
        <div className="flex flex-[4] bg-red-200 items-center justify-center">
          <Users />
        </div>
      </div>
    </>

  );
};

export default Board;
