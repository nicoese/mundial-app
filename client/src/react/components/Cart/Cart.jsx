import React from "react";
import NavBar from "../NavBar/NavBar";
import CartDetailCard from "./CartDetailCard"

const Cart = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center w-full h-fit mt-6 sm:mt-8 xl:mt-16 2xl:mt-40 bg-[#f6f6f6]">
        <div className="w-full h-[100px] mt-10">
          <h3 className="pl-2 text-3xl sm:pl-[90px] sm:text-4xl font-bold text-red-600">Revisa tu carrito.</h3>
          <p className="pl-[10px] sm:pl-[93px] sm:mt-2 text-gray-600">Envios y devoluciones gratis.</p>
        </div>
        <div className="flex flex-col items-center w-full h-fit p-4">
          <CartDetailCard />
          <CartDetailCard />
          <CartDetailCard />
          <CartDetailCard />
          <CartDetailCard />
          <CartDetailCard />
          <CartDetailCard />
          <CartDetailCard />
          <CartDetailCard />
        </div>
        <hr className="w-[80%]"/>
        <div className="flex flex-col items-center w-[50%] h-fit py-4">
          <div className="flex items-start w-[90%] h-fit">
            <div className="w-full h-fit text-gray-500">Subtotal</div>
            <div className="w-full h-fit text-gray-500 text-end">$000000 ARS</div>
          </div>
          <div className="flex items-start w-[90%] h-fit py-2">
            <div className="w-full h-fit text-gray-500 ">Descuento</div>
            <div className="w-full h-fit text-gray-500 text-end">$-</div>
          </div>
          <hr className="w-[90%]"/>
          <div className="flex items-start w-[90%] h-fit py-2"> 
            <div className="w-full h-fit px-2 text-xl font-bold text-red-600 ">Total</div>
            <div className="w-full h-fit px-2 text-xl font-bold text-red-600 text-end">$000000 ARS</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
