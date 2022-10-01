

export const PurchaseCard = ({userEmail, purchaseId, products, totalPrice,}) => {

    return <>

        <p>{userEmail}</p>
        <p>{purchaseId}</p>
        {
            products.map(e => {
                return <p>{e.name}</p>
            })
        }
        <p>{totalPrice}</p>

    </>
}