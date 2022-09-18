import React /* { useEffect } */ from "react";
/* import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../../redux/actions/index.js"; */
import NavBar from "../NavBar/NavBar.jsx";

const Details = (props) => {

  /* const dispatch = useDispatch();
  const ProductDetails = useSelector((state) => state.ProductDetail);
  console.log(ProductDetails);

  useEffect(() => {
    dispatch(getDetails(props.match.params.id));
  }, [props.match.params.id, dispatch]); */

  const selectPic = (e)=>{
    let principalPic = document.querySelector('#principal-pic') 

    principalPic.alt = e.target.alt
    principalPic.src = e.target.src
  }

  return (
    <>
      <NavBar />
      <section className="flex flex-col w-full h-[100vh] py-4">
        <div className="flex items-center w-[95%] h-[45px] my-4">
          <p className="text-xl ml-2 text-red-600"> {`Category >`} </p> 
          <p className="text-xl ml-2 text-red-600 font-semibold"> Product </p>
        </div>
        <div className="flex items-center justify-between w-[95%] h-[95%]">
          <div className="flex flex-col items-center justify-between w-[15%] h-[550px]">
            <img src='' alt="product-pic1" className="w-full h-[32%] cursor-pointer hover:border-[1px] border-red-600 shadow-md" onClick={selectPic}/>
            <img src='' alt="product-pic2" className="w-full h-[32%] cursor-pointer hover:border-[1px] border-red-600 shadow-md" onClick={selectPic}/>
            <img src='' alt="product-pic3" className="w-full h-[32%] cursor-pointer hover:border-[1px] border-red-600 shadow-md" onClick={selectPic}/>
          </div> 
          <div className="relative flex items-center w-[50%] h-[600px]">
            <img src='' alt="product-pic" id="principal-pic" className="w-full h-full shadow-md" />
            <button className="absolute top-6 right-9 flex items-center justify-center h-[50px] w-[50px] rounded-md border-2 border-red-600 duration-300 hover:text-2xl text-gray-400 font-bold">❤</button>
          </div>
          <div className="flex flex-col items-start w-[30%] h-[580px]">
            <h1 className="mb-4 text-4xl font-bold  text-red-600"> Producto Producto Producto Producto</h1>
            <p className="mb-4 text-2xl font-semibold">$100000 ARS</p>
            <div className="flex justify-around items-center w-[80%] h-[50px]">
              <div className="flex items-center justify-center h-full w-[20%] mr-1 text-xl hover:font-bold hover:border-2 text-red-600 border-[1px] border-red-600 cursor-pointer">XS</div>
              <div className="flex items-center justify-center h-full w-[20%] mr-1 text-xl hover:font-bold hover:border-2 text-red-600 border-[1px] border-red-600 cursor-pointer">S</div>
              <div className="flex items-center justify-center h-full w-[20%] mr-1 text-xl hover:font-bold hover:border-2 text-red-600 border-[1px] border-red-600 cursor-pointer">M</div>
              <div className="flex items-center justify-center h-full w-[20%] mr-1 text-xl hover:font-bold hover:border-2 text-red-600 border-[1px] border-red-600 cursor-pointer">L</div>
              <div className="flex items-center justify-center h-full w-[20%] mr-1 text-xl hover:font-bold hover:border-2 text-red-600 border-[1px] border-red-600 cursor-pointer">XL</div>
            </div>
            
            <p className="flex justify-start items-center w-[80%] h-[50px] my-2 text-3xl text-red-600 border-b-[1px] border-gray-200">DESCRIPTION</p>
            <p className="text-lg">
              Producto Producto Producto Producto
              Producto Producto Producto Producto
              Producto Producto Producto Producto
              Producto Producto Producto Producto
              Producto Producto Producto Producto
              Producto Producto Producto Producto
            </p>

            <button className="w-[8em] h-[3em] mt-4 rounded-md bg-red-600 text-white font-bold font-[Lato]"> Add to cart </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Details