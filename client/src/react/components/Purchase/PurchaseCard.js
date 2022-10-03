import {Link} from "react-router-dom";


export const PurchaseCard = ({user, purchaseId, products, totalPrice, date}) => {

    return <>

        <div className={'flex flex-col max-w-[80%] p-10 mb-10 border-2 font-semibold rounded-[1%]'}>
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
                    console.log(e)
                    return <div className={'flex justify-between'}>
                        <img src={e.img} className={' w-10 h-12 self-center'} alt=""/>
                        <p className={'p-5'}>{e.name}</p>
                        <p className={'p-5'}>x{e.cantidad}</p>
                        <Link className={'p-5'} to={`/profile/add-review/${e.id}`}>


                            <button type="button"
                                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400
                                    hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200
                                    dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                                    mr-2 mb-2 min-w-[55%] self-center"
                            >
                                Añadir reseña
                            </button>




                        </Link>
                        <p className={'p-5 flex self-center justify-end'}>${e.price}</p>
                    </div>

                })
            }

        </div>

            <p className={'self-end'}>Total: ${totalPrice}</p>
        </div>

    </>
}