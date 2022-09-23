import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import CartDetailCard from "./CartDetailCard"

const Cart = () => {
  const [state, updateState] = useState(true);
  let productsInStorage = [];
  let totalPrice = 0;
  let storageKeys = Object.keys(localStorage);
    
  for (let i = 0; i < storageKeys.length; i++) {
    if(storageKeys[i] !== 'products'){
      productsInStorage.push(JSON.parse(localStorage[storageKeys[i]]))
    }
  }
  for (let i = 0; i < productsInStorage.length; i++) {
    totalPrice += productsInStorage[i].price * productsInStorage[i].cantidad 
  }

  const handleClick = ()=>{
    productsInStorage.length !== 0 ? console.log(productsInStorage) : alert("No tienes productos en tu carrito. Añade algunos!")
    /* dispatch(buyDetail(JSON.parse(buyInfo))) */
  }
  const deleteProduct = ()=>{
    updateState(!state)
  }

  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center w-full h-fit mt-6 sm:mt-8 xl:mt-16 2xl:mt-40 bg-[#f6f6f6]">
        <div className="w-full h-[100px] mt-10">
          <h3 className="pl-2 text-3xl sm:pl-[90px] sm:text-4xl font-bold text-red-600">Revisa tu carrito.</h3>
          <p className="pl-[10px] sm:pl-[93px] sm:mt-2 text-gray-600">Envios y devoluciones gratis.</p>
        </div>
        <div className="flex flex-col items-center w-full h-fit p-4">
          { productsInStorage && productsInStorage.map((p)=>{
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
            <div className="w-full h-fit px-2 text-xl font-bold text-red-600 ">Total</div>
            <div id="total" className="w-full h-fit px-2 text-xl font-bold text-red-600 text-end">{`$${totalPrice} ARS`}</div>
          </div>
          <div className="flex items-start justify-center w-[90%] h-fit py-2"> 
          <button onClick={()=>handleClick()} className="w-[12em] h-[3em] mr-2 rounded-md bg-red-600 hover:bg-red-800 text-white font-bold font-[Lato] tracking-wider"> Pagar </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
