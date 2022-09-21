import React from "react";

const CartDetailCard = () => {

  const valor = document.querySelector("#cantidad")
  let cantidad = valor.innerHTML
  
  const handleCantidad = (e)=>{
    /* if(e.target.name = "restar"){
      if(cantidad === "1"){
        return valor.innerHTML= cantidad
      } else {
        return cantidad += cantidad
      }
    } */
    if(e.target.name === "sumar"){
      cantidad +=1
      valor.innerHTML= cantidad
    }
  }



  return (
    <div className="flex-col items-center flex sm:flex-row sm:items-center sm:justify-around w-full sm:w-[60%] h-fit my-2 shadow-md">
      <div className="flex justify-end w-full mb-2 pr-2 sm:hidden">
          <button className="flex items-center justify-center h-8 w-7 text-white font-bold bg-red-600 rounded-md">
            x
          </button>
      </div>
      <div className="h-[220px] w-[200px]">
        <img
          src="https://www.afashop.com.ar/ccstore/v1/images/?source=/file/v3363863698249912481/products/HB9215_FC_eCom-0.jpg"
          alt=""
          className="h-full"
        />
      </div>
      <div className="h-full w-[80%] py-4">
        <p className="mb-2 px-3 text-xl sm:text-3xl font-bold sm:font-semibold text-red-600">
          Nombre de producto jarcodeado
        </p>
        <div className="flex justify-between items-center pr-4 pl-4 sm:pr-14">
          <button name="restar" onClick={(e)=> handleCantidad(e)}>-</button>
          <div id='cantidad' className="h-8 w-10 pl-[7px] bg-transparent font-semibold rounded-md border-[1px] border-red-600 cursor-pointer">
            1
          </div>
          <button name="sumar" onClick={(e)=> handleCantidad(e)}>+</button>
          <p className="mb-2 font-semibold text-2xl text-gray-700">$16.500</p>
        </div>
        <div className="hidden sm:flex sm:justify-end sm:w-full mt-2 pr-4 sm:pr-14">
          <button className="sm:hover:font-semibold sm:text-sm sm:underline sm:text-red-600">
            Quitar producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetailCard;
