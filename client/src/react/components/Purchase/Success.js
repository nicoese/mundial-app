import NavBar from "../NavBar/NavBar";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useAuth0} from "@auth0/auth0-react";
import {getLastPurchase} from "../../../redux/actions";

export const Success = () => {

    useEffect(() => {
        delay(1000)
            .then(e => {
                dispatch(getLastPurchase(user.email))
            })

    }, []);

    function delay(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    const dispatch = useDispatch()
    const {user} = useAuth0()

    // user && dispatch(getLastPurchase(user.email))

    const {
        purchase
    } = useSelector(state => state)

    return <div>
        <NavBar/>

        {user && <div className={'mt-24'}>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <img src={user.picture} alt={user.name}/>
        </div>}

        {purchase.products && purchase.products.map(e => {
            return <div>{e.name}</div>
        })}
        {purchase && <div>{purchase.totalPrice}</div>}
    </div>
}