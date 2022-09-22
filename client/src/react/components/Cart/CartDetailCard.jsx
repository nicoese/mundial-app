import React, { useEffect, useState } from "react";
import { removeToCart } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const CartDetailCard = ({id, name, price, img}) => {
  const dispatch = useDispatch()
  let productInCart = useSelector((state)=>state.cart)

  localStorage.setItem(`${id}`, JSON.stringify({name, price, img, cantidad: 1}))
  let productInStorage =  JSON.parse(localStorage.getItem(`${id}`))
  console.log(productInStorage)

  const [cantidad, setCantidad] = useState(productInStorage.cantidad)

  const handleAddition = ()=>{
    setCantidad(cantidad + 1)
  }
  const handleSubtraction = ()=>{
    if(cantidad >= 2) setCantidad(cantidad - 1) 
  }
  
  /* const handleRemove = (e)=>{
    console.log(e.target.id);
    let arrProductsId = [];

    for (let i = 0; i < productInCart.length; i++) {
      arrProductsId.push(productInCart[i].id);
    }
    if(arrProductsId.includes(e.target.id)){
      useEffect(()=>{
        dispatch(removeToCart(e.target.id))
      }, [])
    }
  } */

  return (
    <div className="flex-col items-center flex sm:flex-row sm:items-center sm:justify-around w-full sm:w-[60%] h-fit my-2 shadow-md">
      <div className="flex justify-end w-full mb-2 pr-2 sm:hidden">
          <button /* onClick={(e)=>handleRemove(e)} */ id={id} className="flex items-center justify-center h-8 w-7 text-white font-bold bg-red-600 rounded-md">
            x
          </button>
      </div>
      <div className="h-[220px] w-[200px]">
        <img
          src={img}
          alt=""
          className="h-full"
        />
      </div>
      <div className="h-full w-[80%] py-4">
        <p className="mb-2 px-3 text-xl sm:text-3xl font-bold sm:font-semibold text-red-600">
          {productInStorage.name}
        </p>
        <div className="flex justify-between items-center mt-4 pr-4 pl-4 sm:pr-14">
          <div className="flex items-center justify-center">
            <button onClick={()=> handleSubtraction()} className="flex items-center justify-center h-5 w-5 mx-2 rounded-md font-semibold text-xl text-white bg-red-600 hover:bg-red-700">-</button>
            <div id='cantidad' className="flex items-center justify-center h-8 w-10 bg-transparent font-semibold rounded-md border-[1px] border-red-600 cursor-pointer">
              {cantidad}
            </div>
            <button onClick={()=> handleAddition()} className="flex items-center justify-center h-5 w-5 mx-2 rounded-md font-semibold text-xl text-white bg-red-600 hover:bg-red-700">+</button>
          </div>
          <p className="mb-2 font-semibold text-2xl text-gray-700">${productInStorage.price}</p>
        </div>
        <div className="hidden sm:flex sm:justify-end sm:w-full mt-2 pr-4 sm:pr-14">
          <button /* onClick={(e)=>handleRemove(e)} */ id={id} className="sm:hover:font-semibold sm:text-sm sm:underline sm:text-red-600">
            Quitar producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetailCard;
