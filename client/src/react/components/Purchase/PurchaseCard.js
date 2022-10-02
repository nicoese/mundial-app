import {Link} from "@material-ui/core";


export const PurchaseCard = ({user, purchaseId, products, totalPrice, date}) => {

    return <>

        <div className={'flex flex-col max-w-[60%]'}>
            <div className={'flex justify-between'}>
                <div>
                    <h2 className={'mb-10'}>Detalle de la compra</h2>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{new Date(date).toLocaleDateString()}</p>
                </div>
                <div>
                    <p>Orden Nro. {purchaseId}</p>
                </div>
            </div>


            <div className={'flex flex-col p-7'}>

            {
                products.map(e => {
                    return <div className={'flex justify-between'}>
                        <img src={e.img} className={'rounded-[50%] w-10 h-10 self-center'} alt=""/>
                        <p className={'p-5'}>{e.name}</p>
                        <p className={'p-5'}>x{e.cantidad}</p>
                        <Link className={'p-5'} to={'#'}>anadir resena</Link>
                        <p className={'p-5 flex self-end justify-end'}>${e.price}</p>
                    </div>

                })
            }

        </div>

            <p className={'self-end'}>Total: ${totalPrice}</p>
            <p className={'mb-14 mt-4'}>
                ------------------------------------------------------------------------------
            </p>
        </div>

    </>
}