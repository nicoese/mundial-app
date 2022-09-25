import NavBar from "../NavBar/NavBar";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useAuth0} from "@auth0/auth0-react";
import {getLastPurchase} from "../../../redux/actions";
import Confetti from "react-confetti";

export const Success = () => {


    const dispatch = useDispatch()
    const {user} = useAuth0()


    const purchase = useSelector(state => state.purchase[0])

    const [state, setState] = useState({
        animationDone: true
    });

    useEffect(() => {

        user && dispatch(getLastPurchase(user.email))
        setTimeout(() => {
            toggleConfetti();
        }, 8000);
        localStorage.clear()

    }, [user]);

    const toggleConfetti = () => {
        setState({ animationDone: !state.animationDone });
    };

    return <div>
        {state.animationDone && <Confetti numberOfPieces={200}/>}
        <NavBar/>

        {user && <div className={'mt-24'}>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <img src={user.picture} alt={user.name}/>
        </div>}

        <div className={'grid grid-cols-1'}></div>
        {purchase && purchase.products.map(e => {
            return <div className={'flex '}>
                <p className={'p-10'}>{e.name}</p>
                <p className={'p-10'}>{e.price}</p>
                <p className={'p-10'}>{e.cantidad}</p>
                <img className={'w-24 h-[auto]'} src={e.img} alt={e.name}/>
            </div>
        })}
        {purchase && <div>{purchase.totalPrice}</div>}
    </div>
}