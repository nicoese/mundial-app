import NavBar from "./NavBar/NavBar";
import {ProductsContainer} from "./ProductsContainer";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { addUserToDb } from "../../redux/actions";


export const Products = () => {

    const {user}  = useAuth0()
    let dispatch = useDispatch()
    let dbUsers = useSelector(state=> state.users)

    if(!dbUsers?.find(u=>u.email === user?.email)){
        dispatch(addUserToDb(user))
    }

    return <div className={'flex flex-col'}>
        <NavBar/>
        <ProductsContainer />
    </div>
}