import {useAuth0} from "@auth0/auth0-react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {PurchaseCard} from "./PurchaseCard";
import {getAllPurchasesByUserEmail} from "../../../redux/actions";


export const PurchaseContainer = () => {

    const {user} = useAuth0()
    const {userPurchases} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {

        user && dispatch(getAllPurchasesByUserEmail(user.email))

    }, [user]);


    return <>
        <div className={'flex flex-col min-w-[80%]'}>
        <h2 className={'text-xl mt-20 p-24'}>Mis compras</h2>
        {userPurchases.length > 0 ? userPurchases.map(e => {
            return <div className={'grid grid-cols-1 px-24'}>
                <PurchaseCard
                    user={user && user}
                    purchaseId={e.id}
                    products={e.products}
                    totalPrice={e.totalPrice}
                    date={e.date}
                />
            </div>

        }) : <div >No tenes compras realizadas</div>
        }
        </div>
    </>
}