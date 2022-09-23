import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../components/Landing/Landing.css" //solo para tomar las fuentes


export const ProductCard = ({ id, name, price, img, brand, stadium }) => {
  const dispatch = useDispatch()
  const prodcutsInCart = useSelector((state)=> state.cart)

  const handleClick = ()=>{
    const firstAdd = localStorage.getItem(`${id}`)

    if(firstAdd === null){
      localStorage.setItem(`${id}`, JSON.stringify({id, name, price, img, cantidad: 1})) 
      alert("Añadiste el Producto a tu carrito")
    } else{
      alert("Este producto ya fue añadido. Echale un vistazo al carrito!")
    }
  }

  return (
    <div className="flex flex-col max-w-sm bg-white h-[400px] rounded-md" key={id}>
        {img ? (
          <Link className="flex items-center justify-center w-full h-[15em]">
            <div className="flex items-center justify-center w-full h-[15em]">
              <img className="h-[12em]" src={img} alt="" />
            </div>
          </Link>
        ) : (
          "no available image"
        )}
        <div className="flex items-start w-full pl-[2em]">
            <p className="text-2xl w-[90%] text-start font-extrabold font-[Lato] truncate tracking-wide">
              <Link className="rounded-md cursor-pointer" to={`${id}`}>{name}</Link>
            </p>
        </div>
        <div className="mb-4 mt-1">
          <p className="font-[Lato] text-xl w-full text-start pl-[1.75em] ">${new Intl.NumberFormat().format(price)}</p>
          <p className="font-[Lato] text-2xl font-extrabold">{brand ? `marca ${brand}` : stadium ? `estadio ${stadium}` : ""}</p>
        </div>
        <div className="w-full flex items-center justify-around">
          <button onClick={()=>handleClick()} className="w-[8em] h-[3em] mr-2 rounded-md bg-red-600 hover:bg-red-800 text-white font-bold font-[Lato]"> Al Carrito </button>
          <button className=" flex items-center justify-center h-[2.3em] ml-[3em] rounded-md p-2 border-2 border-red-600 text-red-600 font-bold">❤</button>
        </div>
      </div>
  );
};
