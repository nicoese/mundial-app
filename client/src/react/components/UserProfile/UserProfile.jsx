import React, {useState} from "react";
import {useAuth0} from "@auth0/auth0-react"; //se borraron imports que no se utilizaban en este component4444444
import "./modal.css"
import NavBar from "../NavBar/NavBar";
import {Sidebar} from "./Sidebar"; //se borraron imports que no se utilizaban en este component
import {Outlet} from "react-router";

const UserProfile = () => {

    const {user} = useAuth0()

    return <>
        <NavBar/>
        <div className={'flex'}>
            <Sidebar/>
            <Outlet/>
        </div>
    </>
};

export default UserProfile;
