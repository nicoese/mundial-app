import {useAuth0} from "@auth0/auth0-react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {PurchaseCard} from "./PurchaseCard";


export const PurchaseContainer = () => {

    const {user} = useAuth0()
    const {purchases} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {

        // user && dispatch(getAllPurchasesByEmail(user.email))

    }, []);


    return <>
        <div className={'grid grid-cols-1'}>
            {purchases.length > 0 && purchases.map(e => {
                return <PurchaseCard
                    userEmail={user && user.email}
                    purchaseId={e.id}
                    products={e.products}
                    totalPrice={e.totalPrice}
                />
            })}
        </div>
    </>
}