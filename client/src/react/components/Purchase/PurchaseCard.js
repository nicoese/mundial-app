import {Link} from "@material-ui/core";


export const PurchaseCard = ({userEmail, purchaseId, products, totalPrice,}) => {

    return <>

        <p>{userEmail}</p>
        <p>{purchaseId}</p>
        {
            products.map(e => {
                return <div className={'flex'}>
                    <p className={'p-5'}>{e.name}</p>
                    <Link className={'p-5'} to={'#'}>anadir resena</Link>
                </div>
            })
        }
        <p>{totalPrice}</p>
        ------------------
    </>
}