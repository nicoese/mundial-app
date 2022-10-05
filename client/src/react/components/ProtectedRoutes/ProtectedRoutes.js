import {useAuth0} from "@auth0/auth0-react";
import {Navigate} from "react-router";
import {useEffect} from "react";


export const ProtectedRoutes = ({children}) => {

    const {isAuthenticated, isLoading} = useAuth0()

    delay(1000)
        .then(e => {
            if (!isAuthenticated) {
                return <Navigate to={'/products'}/>
            }
        })

    useEffect(() => {
        console.log(isAuthenticated)
    }, [isAuthenticated])

    if (!isLoading){
        if (!isAuthenticated) {
            return <Navigate to={'/products'}/>
        }
    }

    return children
}