import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import NavBar from "../NavBar/NavBar";
import CartDetailCard from "./CartDetailCard"
import {buyDetail, getProductsInCart, purchaseFailed, cleanCart} from "../../../redux/actions";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router";
import Swal from "sweetalert";

const Cart = () => {
  const [state, updateState] = useState(true);
  let productsInCart = useSelector(state => state.cart);
  let totalPrice = 0;
  const dispatch = useDispatch()
  const {user, isAuthenticated} = useAuth0()
  const navigate = useNavigate()
  const {mp_link} = useSelector(state => state)
  const url = new URL(window.location)

  let purchaseStatus = !!url.searchParams.get('status')



  useEffect(() => {

    if (purchaseStatus) {
      Swal({
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

  useEffect(()=>{
  
    user && dispatch(getProductsInCart(user.email)) 
    /* return () =>{ 
      dispatch(cleanCart())
    } */
  }, [])

  /* for (let i = 0; i < storageKeys.length; i++) {
    if(storageKeys[i] !== 'products'){
      productsInStorage.push(JSON.parse(localStorage[storageKeys[i]]))
    }
  }
  for (let i = 0; i < productsInStorage.length; i++) {
    totalPrice += productsInStorage[i].price * productsInStorage[i].cantidad 
  } */

  if (mp_link) window.location.replace(mp_link)

  const handleClick = async ()=>{

    const purchase = {
      email: user.email,
      products: productsInCart.products,
      totalPrice: totalPrice
    }

    if (productsInCart.products.length !== 0) {
      await dispatch(buyDetail(purchase))
    } else {
      alert("No tienes productos en tu carrito. Añade algunos!")
    }
  }

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  const deleteProduct = ()=>{
    updateState(!state)
  }

  console.log("cart", productsInCart);

  return (
    <>
      <NavBar />

      {productsInCart.length > 0 ?


          <main className="flex flex-col items-center w-full h-fit mt-6 sm:mt-8 xl:mt-16 2xl:mt-40 bg-[#f6f6f6]">
            <div className="w-full h-[100px] mt-10">
              <h3 className="pl-2 text-3xl sm:pl-[90px] sm:text-4xl font-bold text-[#790729]">Revisa tu carrito.</h3>
              <p className="pl-[10px] sm:pl-[93px] sm:mt-2 text-gray-600">Envios y devoluciones gratis.</p>
            </div>
            <div className="flex flex-col items-center w-full h-fit p-4">
              { productsInCart && productsInCart.map((p)=>{
                return(
                    <CartDetailCard
                        id={p.id}
                        name={p.name}
                        price={p.price}
                        img={p.img}
                        cantidad={p.cantidad}
                        deleteProduct={deleteProduct}
                    />)
              })}
            </div>
            <hr className="w-[80%]"/>
            <div className="flex flex-col items-center w-[50%] h-fit py-4">
              <div className="flex items-start w-[90%] h-fit">
                <div className="w-full h-fit text-gray-500">Subtotal</div>
                <div id="subtotal" className="w-full h-fit text-gray-500 text-end">{`$${totalPrice} ARS`}</div>
              </div>
              <div className="flex items-start w-[90%] h-fit py-2">
                <div className="w-full h-fit text-gray-500 ">Descuento</div>
                <div className="w-full h-fit text-gray-500 text-end">$-</div>
              </div>
              <hr className="w-[90%]"/>
              <div className="flex items-start w-[90%] h-fit py-2">
                <div className="w-full h-fit px-2 text-xl font-bold text-[#790729] ">Total</div>
                <div id="total" className="w-full h-fit px-2 text-xl font-bold text-[#790729] text-end">{`$${totalPrice} ARS`}</div>
              </div>
              <div className="flex items-start justify-center w-[90%] h-fit py-2">
                <button onClick={()=>handleClick()} className="w-[12em] h-[3em] mr-2 rounded-md bg-[#790729] hover:bg-red-800 text-white font-bold font-[Lato] tracking-wider"> Pagar </button>
              </div>
            </div>
          </main>


      : <div className={'mt-48'}><h1 className={'text-2xl text-center'}>No tiene productos en el carro</h1></div>}


    </>
  );
};

export default Cart;
