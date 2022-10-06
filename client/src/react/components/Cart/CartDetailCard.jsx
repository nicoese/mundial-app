import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { addToCart, removeToCart } from "../../../redux/actions/index.js";
import {useAuth0} from "@auth0/auth0-react";
import swal from "sweetalert";
import { useState } from "react";

const CartDetailCard = ({ id, name, price, img, cantidad, stock, isPurchase }) => {
  const { user } = useAuth0()
  const dispatch = useDispatch()
  const productsInCart = useSelector(state => state.cart)
  const [selectedSize, setSelectedSize] = useState('')
  const [state, setState] = useState({id:'', active:false})

  /* funcion para obtener el talle */
  let sizes;
  { stock ? sizes = Object.keys(stock) : console.log(stock)}

  const handleSize = (e)=>{
    let buttonId =  e.target.id
    let newSize = buttonId.slice(0,1) === 'X' ? 'XL': buttonId.slice(0,1);
    console.log(newSize)
    let newAmount = productsInCart.filter( p => p.id === id )
    let btn = document.getElementById(buttonId);
    setSelectedSize(newSize)
    setState({ id:buttonId, active:true })

    dispatch(addToCart(user.email, { id: e.target.name, name, price, img, size: newSize, cantidad: newAmount[0].cantidad } ))

    if((state.id === buttonId || state.id === '') && state.active === false){
      btn.style.backgroundColor="#790729";
      btn.style.color="#fff";
    } else if(state.id !== buttonId && state.active === true){
      let prevBtn = document.getElementById(state.id);
      prevBtn.style.backgroundColor="#f6f6f6";
      prevBtn.style.color="#790729";
      btn.style.backgroundColor="#790729";
      btn.style.color="#fff";
    }
  }

  const handleAddition = (e)=>{
    let newAmount = productsInCart.filter( p => p.id === e.target.id )
    dispatch(addToCart(user.email, { id: e.target.id, name, price, img, size:selectedSize, cantidad: newAmount[0].cantidad + 1 } ))
  }

  const handleSubtraction = (e)=>{
    let newAmount = productsInCart.filter( p => p.id === e.target.id )
    if(newAmount[0].cantidad !== 1){
      dispatch(addToCart(user.email, { id: e.target.id, name, price, img, size:selectedSize, cantidad: newAmount[0].cantidad - 1 } ))
    } else{
      swal({
        text: 'No puedes tener menos de un producto',
        icon: "info",
      });
    }
  }
  
  const handleRemove = (e)=>{
    dispatch(removeToCart(user.email, e.target.id))
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
        <div id={id} className="flex w-full pl-4 items-center justify-start">
          { sizes.map( size => {
            return (
              <button id={`${size}:${id}`} name={id} onClick={ e => handleSize(e)} className=" flex items-center justify-center h-5 w-5 px-3 mr-2 bg-transparent border-[1px] border-[#790729] text-[#790729] hover:font-semibold">{ size }</button>
            )            
          })}
        </div>
        <div className="flex justify-between items-center mt-4 pr-4 pl-4 sm:pr-14">
          <div className="flex items-center justify-center">
            {!isPurchase && <button onClick={(e) => handleSubtraction(e)} id={id}
                     className="flex items-center justify-center h-5 w-5 mx-2 rounded-md font-semibold text-xl text-white bg-[#790729] hover:bg-red-800">-</button>}
            <div id='cantidad' className="flex items-center justify-center h-8 w-10 bg-transparent font-semibold rounded-md border-[1px] border-[#790729]cursor-pointer">
              {cantidad}
            </div>
            {!isPurchase && <button onClick={(e) => handleAddition(e)} id={id}
                     className="flex items-center justify-center h-5 w-5 mx-2 rounded-md font-semibold text-xl text-white bg-[#790729] hover:bg-red-800">+</button>}
          </div>
          <p className="mb-2 font-semibold text-2xl text-gray-700">${price*cantidad}</p>
        </div>
        <div className="hidden sm:flex sm:justify-end sm:w-full mt-2 pr-4 sm:pr-14">
          {!isPurchase && <button onClick={(e) => handleRemove(e)} id={id}
                   className="sm:hover:font-semibold sm:text-sm sm:underline sm:text-[#790729]">
            Quitar producto
          </button>}
        </div>
      </div>
    </div>
  );
};

export default CartDetailCard;
