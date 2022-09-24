import {useAuth0} from "@auth0/auth0-react";
import {Navigate} from "react-router";


export const ProtectedRoutes = ({children}) => {

    const {isAuthenticated} = useAuth0()

    delay(1000)
        .then(e => {
            if (!isAuthenticated) {
                return <Navigate  to={'/products'}/>
            }
        })



    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    return children
}