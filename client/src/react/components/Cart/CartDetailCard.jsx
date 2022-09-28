import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { addToCart, removeToCart } from "../../../redux/actions/index.js";
import {useAuth0} from "@auth0/auth0-react";

const CartDetailCard = ({ id, name, price, img, cantidad }) => {
  const { user } = useAuth0()
  const dispatch = useDispatch()
  const productsInCart = useSelector(state => state.cart)

  const handleAddition = (e)=>{
    let newAmount = productsInCart.filter( p => p.id === e.target.id )
    console.log(newAmount);
    dispatch(addToCart(user.email, { id: e.target.id, name, price, img, cantidad: newAmount[0].cantidad + 1 } ))
  }

  const handleSubtraction = (e)=>{
    let newAmount = productsInCart.filter( p => p.id === e.target.id )
    console.log(newAmount);
    dispatch(addToCart(user.email, { id: e.target.id, name, price, img, cantidad: newAmount[0].cantidad - 1 } ))
  }
  
  const handleRemove = (e)=>{

    /* console.log("cartdetail", user.email, e.target.id); */
    dispatch(removeToCart(user.email, e.target.id))

    /* for (let i = 0; i < productsInStorage.length; i++) {
      if(productsInStorage[i].id === e.target.id){
        localStorage.removeItem(productsInStorage[i].id);
      }
    }
    deleteProduct() */
  } 

  return (
    <div className="flex-col items-center flex sm:flex-row sm:items-center sm:justify-around w-full sm:w-[60%] h-fit my-2 shadow-md">
      <div className="flex justify-end w-full mb-2 pr-2 sm:hidden">
          <button onClick={(e)=>handleRemove(e)} id={id} className="flex items-center justify-center h-8 w-7 text-white font-bold bg-[#790729] rounded-md">
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
        <p className="mb-2 px-3 text-xl sm:text-3xl font-bold sm:font-semibold text-[#790729]">
          {name}
        </p>
        <div className="flex justify-between items-center mt-4 pr-4 pl-4 sm:pr-14">
          <div className="flex items-center justify-center">
            <button onClick={(e)=> handleSubtraction(e)} id={id} className="flex items-center justify-center h-5 w-5 mx-2 rounded-md font-semibold text-xl text-white bg-[#790729] hover:bg-red-800">-</button>
            <div id='cantidad' className="flex items-center justify-center h-8 w-10 bg-transparent font-semibold rounded-md border-[1px] border-[#790729]cursor-pointer">
              {cantidad}
            </div>
            <button onClick={(e)=> handleAddition(e)} id={id} className="flex items-center justify-center h-5 w-5 mx-2 rounded-md font-semibold text-xl text-white bg-[#790729] hover:bg-red-800">+</button>
          </div>
          <p className="mb-2 font-semibold text-2xl text-gray-700">${price*cantidad}</p>
        </div>
        <div className="hidden sm:flex sm:justify-end sm:w-full mt-2 pr-4 sm:pr-14">
          <button onClick={(e)=>handleRemove(e)} id={id} className="sm:hover:font-semibold sm:text-sm sm:underline sm:text-[#790729]">
            Quitar producto
          </button>
        </div>
    );
};

export default CartDetailCard;
