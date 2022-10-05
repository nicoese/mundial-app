import React from "react";
import { useSelector } from "react-redux";
import ProfileWidget from "../ProfileWidget/ProfileWidget";
import SideBar from "./SideBar";
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet} from "react-router";
import MiniSpinner from "../MiniSpinner/MiniSpinner";
import FormPost from '../FormPost/FormPost'
import { Navigate } from "react-router";
const Board = () => {

  let {isLoading, isAuthenticated , user} = useAuth0()
  let usersInDb = useSelector(state => state.users)

  /* miscuentas93@gmail.com - eminahuellarrosa@gmail.com - nicolagsalinas2@gmail.com -marian@gmail.com - enzolarrosa@gmail.com */
  let userFiltered = usersInDb?.find( u => u.email === user?.email)
  /* console.log(userFiltered)

  console.log(isLoading ? null : user? user.email : null) */
  return (
    <>{ isLoading ? null : (!user || userFiltered.role !== 2 ) ? <Navigate to={"/products"} replace={true}/>: null} 
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
        {/* <FormPost/> */}
        <div className="flex flex-[4] items-center justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Board;
