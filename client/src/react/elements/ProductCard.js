import { Link } from "react-router-dom";
import "../components/Landing/Landing.css" //solo para tomar las fuentes

export const ProductCard = ({ id, name, price, img, brand, stadium }) => {
  return (
    <Link className="flex flex-col max-w-sm bg-white shadow-md rounded-md" to={`${id}`}>
      <div className="flex flex-col max-w-sm bg-white h-[400px] rounded-md" key={id}>
        {img ? (
          <div className="flex items-center justify-center w-full h-[15em]">
            <img className="h-[12em]" src={img} alt="" />
          </div>
        ) : (
          "no available image"
        )}
        <div className="flex items-start w-full pl-[2em]">
          <p className="text-2xl w-[90%] text-start font-extrabold font-[Lato] truncate tracking-wide">{name}</p>
        </div>
        <div className="mb-4 mt-1">
          <p className="font-[Lato] text-xl w-full text-start pl-[1.75em] ">${new Intl.NumberFormat().format(price)}</p>
          <p className="font-[Lato] text-2xl font-extrabold">{brand ? `marca ${brand}` : stadium ? `estadio ${stadium}` : ""}</p>

        </div>
        <div className="w-full flex items-center justify-around">
          <button className="w-[8em] h-[3em] mr-2 rounded-md bg-red-600 text-white font-bold font-[Lato]"> Add to cart </button>
          <button className=" flex items-center justify-center h-[2.3em] ml-[3em] rounded-md p-2 border-2 border-red-600 text-red-600 font-bold">❤</button>
        </div>
      </div>
    </Link>
  );
};
