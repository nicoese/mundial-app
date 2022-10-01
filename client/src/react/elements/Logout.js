import {useAuth0} from "@auth0/auth0-react";
import {useEffect} from "react";

export const Logout = () => {
    const {logout} = useAuth0()
    useEffect(() => logout() ,[])
    return ''
}