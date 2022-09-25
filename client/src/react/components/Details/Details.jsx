import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {
    getDetails,
    addToCart,
    resetDetail,
    clearDetailsErr,
    addToFavorites,
    removeFromFavorites
} from "../../../redux/actions/index.js";
import NavBar from "../NavBar/NavBar.jsx";
import Spinner from "../Spinner/Spinner.js";
import {NotFound} from "../Not_Found/Not_Found";
import {useAuth0} from "@auth0/auth0-react";
import Swal from 'sweetalert'

const Details = (props) => {
    const dispatch = useDispatch();
    const details = useSelector((state) => state.ProductDetail);
    const error = useSelector((state) => state.detailsError);
    const favorites = useSelector((state) => state.favorites);
    const user = useAuth0().user
    let params = useParams()


    useEffect(() => {
        dispatch(clearDetailsErr())


        delay(100).then(() => {
                dispatch(getDetails(params.id));
            })
            
        return () => {
            dispatch(resetDetail());
        }
        
    }, [dispatch]);

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    /* const handleClick = ()=>{
      dispatch(addToCart({
        name:details.name,
        price: details.price,
        img: details.img,
      }))
    } */

    const selectPic = (e) => {
        let principalPic = document.querySelector('#principal-pic')

        principalPic.alt = e.target.alt
        principalPic.src = e.target.src
    }


    const handleClick = () => {

        if (details._id){
            details["id"] = details._id
            delete details["_id"]
        }

        console.log(details.id)

        const firstAdd = localStorage.getItem(details.id)

        if (!firstAdd) {
            details["cantidad"] = 1
            localStorage.setItem(`${details.id}`, JSON.stringify(details))
            Swal('Añadiste el Producto a tu carrito', '', 'success')

        } else {
            Swal({
                title: "Este producto ya fue añadido. Echale un vistazo al carrito!",
                icon: 'warning'
            })

        }
    }



    function handleLike(ev) {

        //manejo del boton de like

        //si la tarjeta contenedora tiene el corazon blanco
        //agrego el prod a favoritos
        if (ev.target.innerText === "🤍") {

            //envio el id del producto y el mail del user a la api
            dispatch(addToFavorites(details.id, user.email))
        }

        //si la tarjeta tiene el corazon rojo elimino el prod de favoritos
        if (ev.target.innerText === "❤") {
            //igualmente envio el id del prod y el user email
            dispatch(removeFromFavorites(details.id, user.email))
        }


    }


    return (
        <div>
            {details === {} ? <div className={'mt-48'}>cargando</div> : error ? <NotFound/> :
                <div>
                    <NavBar/>
                    <section className="flex flex-col w-full h-[100vh] py-4">
                        <div className="flex items-center w-[95%] h-[45px] my-4">
                            <p className="text-xl ml-2 text-red-600"> {`Category >`} </p>
                            <p className="text-xl ml-2 text-red-600 font-semibold"> Product </p>
                        </div>
                        <div className="flex items-center justify-between w-[95%] h-[95%]">
                            <div className="flex flex-col items-center justify-between w-[15%] h-[550px]">
                                <img src='https://bit.ly/3eXgVU4' alt="product-pic1"
                                     className="w-full h-[32%] cursor-pointer hover:border-[1px] border-red-600 shadow-md"
                                     onClick={selectPic}/>
                                <img src='https://bit.ly/3eXgVU4' alt="product-pic2"
                                     className="w-full h-[32%] cursor-pointer hover:border-[1px] border-red-600 shadow-md"
                                     onClick={selectPic}/>
                                <img src='https://bit.ly/3eXgVU4' alt="product-pic3"
                                     className="w-full h-[32%] cursor-pointer hover:border-[1px] border-red-600 shadow-md"
                                     onClick={selectPic}/>
                            </div>
                            <div
                                className="relative flex items-center justify-center w-[50%] h-[600px] shadow-lg bg-white">
                                <div className="flex items-center w-[auto] h-[600px]">
                                    <img src={details.img} alt="product-pic" id="principal-pic"
                                         className="w-full h-full"/>
                                    <button
                                        onClick={handleLike}
                                        className="absolute top-6 right-9 flex items-center justify-center
                                        h-[50px] w-[50px] rounded-md border-2 border-red-600 duration-300
                                        hover:text-2xl text-gray-400 font-bold">
                                        {/*busco el producto en el arreglo de favoritos del user
                                        en el estado global si lo encuentro el corazon que muestro es
                                        el rojo */}
                                        {favorites.find(fav => fav.id === details.id) ? "❤" : "🤍"}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col items-start w-[30%] h-[580px]">
                                <h1 className="mb-4 text-4xl font-bold  text-red-600">{details.name}</h1>
                                <p className="mb-4 text-2xl font-semibold">$ {new Intl.NumberFormat().format(details.price)}</p>
                                {details.type === "jersey" ?
                                    <div className="flex justify-around items-center w-[80%] h-[50px]">
                                        <div
                                            className="flex items-center justify-center h-full w-[20%] mr-1 text-xl hover:font-bold hover:border-2 text-red-600 border-[1px] border-red-600 cursor-pointer">XS
                                        </div>
                                        <div
                                            className="flex items-center justify-center h-full w-[20%] mr-1 text-xl hover:font-bold hover:border-2 text-red-600 border-[1px] border-red-600 cursor-pointer">S
                                        </div>
                                        <div
                                            className="flex items-center justify-center h-full w-[20%] mr-1 text-xl hover:font-bold hover:border-2 text-red-600 border-[1px] border-red-600 cursor-pointer">M
                                        </div>
                                        <div
                                            className="flex items-center justify-center h-full w-[20%] mr-1 text-xl hover:font-bold hover:border-2 text-red-600 border-[1px] border-red-600 cursor-pointer">L
                                        </div>
                                        <div
                                            className="flex items-center justify-center h-full w-[20%] mr-1 text-xl hover:font-bold hover:border-2 text-red-600 border-[1px] border-red-600 cursor-pointer">XL
                                        </div>
                                    </div> : null //NO SPINNER NEEDED JUST ERASING SIZE IF NOT JERSEY
                                }
                                <p className="flex justify-start items-center w-[80%] h-[50px] my-2 text-3xl text-red-600 border-b-[1px] border-gray-200">DESCRIPCIÓN</p>
                                <p className="text-lg">
                                    {details.description}
                                </p>

                                <button onClick={handleClick}
                                    className="w-[8em] h-[3em] mt-4 rounded-md bg-red-600 text-white font-bold font-[Lato]"> Al
                                    Carrito
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            }
        </div>
    )
}

export default Details