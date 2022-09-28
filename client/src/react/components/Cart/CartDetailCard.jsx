import React from "react";

const CartDetailCard = ({id, name, price, img, cantidad, deleteProduct, isPurchase}) => {
    let productsInStorage = []
    let storageKeys = Object.keys(localStorage)

    for (let i = 0; i < storageKeys.length; i++) {
        if (storageKeys[i] !== 'products') {
            productsInStorage.push(JSON.parse(localStorage[storageKeys[i]]))
        }
    }

    const handleAddition = (e) => {
        for (let i = 0; i < productsInStorage.length; i++) {
            if (productsInStorage[i].id === e.target.id) {
                if (productsInStorage[i].cantidad >= 1) {
                    localStorage.setItem(`${productsInStorage[i].id}`,
                        JSON.stringify({
                            id: productsInStorage[i].id,
                            name: productsInStorage[i].name,
                            price: productsInStorage[i].price,
                            img: productsInStorage[i].img,
                            cantidad: (productsInStorage[i].cantidad + 1)
                        }));
                }
            }
        }
        deleteProduct()
    }
    const handleSubtraction = (e) => {
        for (let i = 0; i < productsInStorage.length; i++) {
            if (productsInStorage[i].id === e.target.id) {
                if (productsInStorage[i].cantidad > 1) {
                    localStorage.setItem(`${productsInStorage[i].id}`,
                        JSON.stringify({
                            id: productsInStorage[i].id,
                            name: productsInStorage[i].name,
                            price: productsInStorage[i].price,
                            img: productsInStorage[i].img,
                            cantidad: (productsInStorage[i].cantidad - 1)
                        }));
                }
            }
        }
        deleteProduct()
    }
    const handleRemove = (e) => {
        for (let i = 0; i < productsInStorage.length; i++) {
            if (productsInStorage[i].id === e.target.id) {
                localStorage.removeItem(productsInStorage[i].id);
            }
        }
        deleteProduct()
    }

    return (
        <div
            className="flex-col items-center flex sm:flex-row sm:items-center sm:justify-around w-full sm:w-[60%] h-fit my-2 shadow-md">
            <div className="flex justify-end w-full mb-2 pr-2 sm:hidden">
                <button onClick={(e) => handleRemove(e)} id={id}
                        className="flex items-center justify-center h-8 w-7 text-white font-bold bg-[#790729] rounded-md">
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
                    {
                        !isPurchase &&
                        <div className="flex items-center justify-center">
                        <button onClick={(e) => handleSubtraction(e)} id={id}
                                className="flex items-center justify-center h-5 w-5 mx-2 rounded-md font-semibold text-xl text-white bg-[#790729] hover:bg-red-700">-
                        </button>
                        <div id='cantidad'
                             className="flex items-center justify-center h-8 w-10 bg-transparent font-semibold rounded-md border-[1px] border-[#790729] cursor-pointer">
                            {cantidad}
                        </div>
                        <button onClick={(e) => handleAddition(e)} id={id}
                                className="flex items-center justify-center h-5 w-5 mx-2 rounded-md font-semibold text-xl text-white bg-[#790729] hover:bg-red-700">+
                        </button>
                    </div>}
                    {isPurchase && <p className={'text-xl'}>{cantidad} {cantidad === 1 ? 'Unidad' : 'Unidades'}</p>}
                    <p className="mb-2 font-semibold text-2xl text-gray-700">${price * cantidad}</p>

                </div>
                <div className="hidden sm:flex sm:justify-end sm:w-full mt-2 pr-4 sm:pr-14">

                    {!isPurchase &&
                    <button onClick={(e) => handleRemove(e)} id={id}
                            className="sm:hover:font-semibold sm:text-sm sm:underline text-[#790729] ">
                        Quitar producto
                    </button>
                    }



                </div>
            </div>
        </div>
    );
};

export default CartDetailCard;
