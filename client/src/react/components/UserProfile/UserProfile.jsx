import React, {useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {BsImageAlt} from "react-icons/bs";
import {HiLocationMarker} from "react-icons/hi";
import {AiFillCloseCircle} from "react-icons/ai";
import "./modal.css"
import NavBar from "../NavBar/NavBar";
import {Sidebar} from "./Sidebar";
import {Routes} from "react-router-dom";
import {Route} from "@mui/icons-material";
import {UserBanner} from "./UserBanner";
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
