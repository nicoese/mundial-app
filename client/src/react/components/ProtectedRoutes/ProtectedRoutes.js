import {useAuth0} from "@auth0/auth0-react";
import {Navigate} from "react-router";
import {useEffect} from "react";


export const ProtectedRoutes = ({children}) => {

    const {isAuthenticated} = useAuth0()



    useEffect(() => {
        console.log(isAuthenticated)
    }, [isAuthenticated])

    if (!isAuthenticated) {
        return <Navigate to={'/products'}/>
    }

    return children
}