import React from "react";


const SuccessDetail = ({name, price, img, cantidad }) => {
 
  return (
    <div className="flex-col items-center flex sm:flex-row sm:items-center sm:justify-around w-full sm:w-[60%] h-fit my-2 shadow-md">
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
        <div className="flex justify-between items-center mt-2 pr-4 pl-4 sm:pr-14">
          <div className="flex items-center justify-center">
            <div id='cantidad' className="flex items-center justify-center h-8 w-10 bg-transparent font-semibold rounded-md border-[1px] border-[#790729]cursor-pointer">
              {cantidad}
            </div>
          </div>
          <p className="mb-2 font-semibold text-2xl text-gray-700">${price*cantidad}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessDetail;