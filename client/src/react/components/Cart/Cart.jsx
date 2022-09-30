import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import NavBar from "../NavBar/NavBar";
import CartDetailCard from "./CartDetailCard"
import {buyDetail, getProductsInCart, purchaseFailed, cleanCart} from "../../../redux/actions";
import {useAuth0} from "@auth0/auth0-react";
import swal from "sweetalert";

const Cart = () => {
    const [state, updateState] = useState(true);
    let productsInCart = useSelector(state => state.cart);
    let totalPrice = 0;
    const dispatch = useDispatch()
    const {user, isAuthenticated} = useAuth0()
    const {mp_link} = useSelector(state => state)
    const url = new URL(window.location)

    let purchaseStatus = !!url.searchParams.get('status')

    useEffect(() => {

        if (purchaseStatus) {
            swal({
                icon: 'error',
                title: 'No se pudo realizar la compra :(',
                button: 'Volver al carrito',
            })
                .then(e => {
                    dispatch(purchaseFailed(user.email))
                })
            purchaseStatus = ''
        }

    }, [purchaseStatus, user]);

    useEffect(() => {
        user && dispatch(getProductsInCart(user.email))
    }, [user, dispatch])


    if (mp_link) window.location.replace(mp_link)

    totalPrice = productsInCart.length > 0 && productsInCart.map((a) => a.price * a.cantidad)
        .reduce((a, b) => a + b)

    const handleClick = () => {
        
        const purchase = {
            email: user.email,
            products: productsInCart,
            totalPrice: totalPrice
        }
        
        let sizeValidation = productsInCart.map( p => p.hasOwnProperty('size')).includes(false)
        
        if (productsInCart.length !== 0 && !sizeValidation) {
            // console.log(`se envia:`, productsInCart);
            dispatch(buyDetail(purchase))
        } else {
            swal({
                text: 'No olvides seleccionar el talle de tu producto',
                icon: "warning",
            });
        }


    }

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    const deleteProduct = () => {
        updateState(!state)

    }
    

    return (
        <>
            <NavBar/>


            {productsInCart.length > 0 ?

                <main className="flex flex-col items-center w-full h-fit mt-6 sm:mt-8 xl:mt-16 2xl:mt-40 bg-[#f6f6f6]">
                    <div className="w-full h-[100px] mt-10">
                        <h3 className="pl-2 text-3xl sm:pl-[90px] sm:text-4xl font-bold text-[#790729]">Revisa tu
                            carrito.</h3>
                        <p className="pl-[10px] sm:pl-[93px] sm:mt-2 text-gray-600">Envios y devoluciones gratis.</p>
                    </div>
                    <div className="flex flex-col items-center w-full h-fit p-4">
                        {productsInCart && productsInCart.map((p) => {
                            return (
                                <CartDetailCard
                                    id={p.id}
                                    name={p.name}
                                    price={p.price}
                                    img={p.img}
                                    cantidad={p.cantidad}
                                    stock={p.stock}
                                />)
                        })}
                    </div>
                    <hr className="w-[80%]"/>
                    <div className="flex flex-col items-center w-[50%] h-fit py-4">
                        <div className="flex items-start w-[90%] h-fit">
                            <div className="w-full h-fit text-gray-500">Subtotal</div>
                            <div id="subtotal"
                                 className="w-full h-fit text-gray-500 text-end">{`$${totalPrice} ARS`}</div>
                        </div>
                        <div className="flex items-start w-[90%] h-fit py-2">
                            <div className="w-full h-fit text-gray-500 ">Descuento</div>
                            <div className="w-full h-fit text-gray-500 text-end">$-</div>
                        </div>
                        <hr className="w-[90%]"/>
                        <div className="flex items-start w-[90%] h-fit py-2">
                            <div className="w-full h-fit px-2 text-xl font-bold text-[#790729] ">Total</div>
                            <div id="total"
                                 className="w-full h-fit px-2 text-xl font-bold text-[#790729] text-end">{`$${totalPrice} ARS`}</div>
                        </div>
                        <div className="flex items-start justify-center w-[90%] h-fit py-2">
                            <button onClick={() => handleClick()}
                                    className="w-[12em] h-[3em] mr-2 rounded-md bg-[#790729] hover:bg-red-800 text-white font-bold font-[Lato] tracking-wider"> Pagar
                            </button>
                        </div>
                    </div>
                </main>
                : <div className={'mt-48'}><h1 className={'text-2xl text-center mt-20'}>No tienes productos en el
                    carrito</h1></div>}
        </>
    );
};
export default Cart;
