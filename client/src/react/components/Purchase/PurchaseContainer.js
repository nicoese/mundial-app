import {useAuth0} from "@auth0/auth0-react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {PurchaseCard} from "./PurchaseCard";


export const PurchaseContainer = () => {

    const {user} = useAuth0()
    const {userPurchases} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {

        // user && dispatch(getAllPurchasesByEmail(user.email))

    }, []);


    return <>
        <div className={'flex flex-col'}>
        <h2 className={'text-xl mt-32'}>Mis compras</h2>
        {userPurchases.length > 0 ? userPurchases.map(e => {
            return <div className={'grid grid-cols-1'}>
                <PurchaseCard
                    userEmail={user && user.email}
                    purchaseId={e.id}
                    products={e.products}
                    totalPrice={e.totalPrice}
                />
            </div>

        }) : <div >No tenes compras realizadas</div>
        }
        </div>
    </>
}