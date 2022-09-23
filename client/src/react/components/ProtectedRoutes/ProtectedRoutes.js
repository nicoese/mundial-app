import {useAuth0} from "@auth0/auth0-react";
import {Navigate} from "react-router";


export const ProtectedRoutes = ({children}) => {

    const {isAuthenticated} = useAuth0()

    if (!isAuthenticated) {
        return <Navigate  to={'/products'}/>
    }

    return children
}