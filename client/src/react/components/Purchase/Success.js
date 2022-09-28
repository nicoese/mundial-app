import NavBar from "../NavBar/NavBar";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useAuth0} from "@auth0/auth0-react";
import {getLastPurchase} from "../../../redux/actions";
import Confetti from "react-confetti";
import CartDetailCard from "../Cart/CartDetailCard";

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
        setState({animationDone: !state.animationDone});
    };

    return <>
        {state.animationDone && <Confetti numberOfPieces={200}/>}

        <NavBar/>


        {user && <div className={'mt-32 ml-[15%]'}>

            <h2 className={'text-3xl font-semibold text-red-700 mb-[4%]'}>Detalle ></h2>

            <div className={'flex ml-[7%]'}>
                <img className={'rounded-[50%] py-5 mr-[5%] '} src={user.picture} alt={user.name}/>
                <p className={'py-5 text-xl font-semibold self-center'}>{user.name}</p>
            </div>
            <p className={'py-5 text-xl mb-[5%] ml-[7%] font-semibold text-zinc-500'}>Revisa tu casilla en -> {user.email}</p>
        </div>}

        <div className={'flex flex-col-reverse min-w-fit items-center'}>

        {purchase && purchase.products.map(e => {

            return <CartDetailCard
                id={e.id}
                name={e.name}
                img={e.img}
                price={e.price}
                cantidad={e.cantidad}
                isPurchase={true}
            >
            </CartDetailCard>
        })
        }
            {purchase && <div className={'ml-[30%] font-bold text-2xl text-red-800 mb-[3%]'}>Precio Total :
                <span className={'text-black font-thin'} >{`  $ ${purchase.totalPrice}`}</span></div>}
        </div>

            </>
        }