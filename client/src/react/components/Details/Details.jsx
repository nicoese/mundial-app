import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import {
    getDetails,
    resetDetail,
    clearDetailsErr,
    addToFavorites,
    removeFromFavorites, addToCart
} from "../../../redux/actions/index.js";
import NavBar from "../NavBar/NavBar.jsx";
import {NotFound} from "../Not_Found/Not_Found";
import {useAuth0} from "@auth0/auth0-react";
import Swal from 'sweetalert'
import {Link} from "react-router-dom";
import {ReviewSection} from "../ReviewSection/ReviewSection";

const Details = (props) => {
    const dispatch = useDispatch();
    const details = useSelector((state) => state.ProductDetail);
    const error = useSelector((state) => state.detailsError);
    const cart = useSelector((state) => state.cart);
    const favorites = useSelector((state) => state.favorites);
    const {user, isAuthenticated} = useAuth0()
    let params = useParams()
    const [state, setState] = useState({
        liked: false
    });


    useEffect(() => {
        dispatch(clearDetailsErr())

        delay(100).then(() => {
            dispatch(getDetails(params.id));
        })

        return () => {
            dispatch(resetDetail());
        }
    }, [])

    useEffect(() => {

        //si el user esta logeado comparo el id de la card
        //con los favoritos del use
        if (isAuthenticated) {

            const liked = favorites.find(e => e.id === details.id || e.id === details._id)

            //si existe en la lista muestro el producto
            //como likeado

            if (liked) toggleLike()
        }
    }, [favorites, isAuthenticated, details]);

    //toggle like
    const toggleLike = () => {
        setState({liked: true})
    };
    //toggle dislike
    const toggleDislike = () => {
        setState({liked: false})
    };

    function handleLike(ev) {

        //si el user no esta logeado no puede likear
        if (!isAuthenticated) {
            return Swal('logueate')

        }

        //manejo del boton de like

        //si la tarjeta contenedora tiene el corazon blanco
        //agrego el prod a favoritos
        if (ev.target.innerText === "🤍") {
            //envio el id del producto y el mail del user a la api
            dispatch(addToFavorites(details, user.email))
        }

        //si la tarjeta tiene el corazon rojo elimino el prod de favoritos
        if (ev.target.innerText === "❤") {
            //igualmente envio el id del prod y el user email
            dispatch(removeFromFavorites(details.id, user.email))
            toggleDislike()
        }
        // toggleLike()
    }

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    const selectPic = (e) => {
        let principalPic = document.querySelector('#principal-pic')

        principalPic.alt = e.target.alt
        principalPic.src = e.target.src
    }


    const handleClick = () => {

        // if (details._id) {
        //     details["id"] = details._id
        //     delete details["_id"]
        // }

        if (!isAuthenticated) {
            return Swal('Para realizar una compra deberas registrarte primero')
        }

        dispatch(addToCart(user.email, {
           id : details.id,
           name : details.name,
           price : details.price,
           img : details.img,
           cantidad : 1
        }))


        // const firstAdd = localStorage.getItem(details.id)

        //     if (!firstAdd) {
        //         details["cantidad"] = 1
        //         // localStorage.setItem(`${details.id}`, JSON.stringify(details))
        //         Swal('Añadiste el Producto a tu carrito', '', 'success')
        //             .catch(err => console.log(err))
        //
        //     } else {
        //         Swal({
        //             title: "Este producto ya fue añadido. Echale un vistazo al carrito!",
        //             icon: 'warning'
        //         })
        //             .catch(err => console.log(err))
        //
        //     }
        // }

        if (!cart.find(e => e.id === details.id)) {
            Swal('Añadiste el Producto a tu carrito', '', 'success')
        } else {
            Swal({
                title: "Este producto ya fue añadido. Echale un vistazo al carrito!",
                icon: 'warning'
            })
        }
    }


    return (
        <div>
            {details === {} ? <div className={'mt-48'}>cargando</div> : error ? <NotFound/> :
                <div>
                    <NavBar/>
                    <section className="flex flex-col w-full h-[100vh] py-8 mt-[60px] pl-16">
                        <div className="flex items-center w-[95%] h-[45px] my-8">
                            <Link to={'/'}>
                                <p className="text-xl ml-2 text-[#790729]"> {`Inicio >`} </p>
                            </Link>

                            <Link to={'/products'}>
                                <p className="text-xl ml-2 text-[#790729] font-semibold"> Productos > </p>
                            </Link>

                            <p className="text-xl ml-2 text-black text-[#790729]"> {details.name} </p>

                        </div>
                        <div className="flex items-center w-[95%] h-[95%]">
                            <div className="flex items-center justify-center w-[50%] h-[550px] shadow-lg bg-white">
                                <div className="flex items-center w-[auto] h-[550px]">
                                    <img src={details.img} alt="product-pic" id="principal-pic"
                                         className="w-full h-full"/>
                                </div>
                            </div>
                            <div className="flex flex-col items-start w-[30%] h-[580px] mt-[50px] ml-16">
                                <div className="flex items-center h-fit w-fit">
                                    <h1 className="mb-4 text-4xl font-bold  text-[#790729]">{details.name}</h1>
                                    <button
                                        onClick={handleLike}
                                        className="flex items-center justify-center text-2xl
                                        h-[50px] w-[70px] rounded-md shadow-md duration-300
                                        hover:text-3xl hover:shadow-inner font-bold">
                                        {/*busco el producto en el arreglo de favoritos del user
                                        en el estado global si lo encuentro el corazon que muestro es
                                        el rojo */}
                                        {/*{favorites.length > 0 ? favorites.find(fav => fav.id === details.id) ? "❤" : "🤍" : "🤍"}*/}
                                        {state.liked ? "❤" : "🤍"}
                                    </button>
                                </div>
                                <p className="mb-4 text-2xl font-semibold">$ {new Intl.NumberFormat().format(details.price)}</p>
                                {details.type === "jersey" ?
                                    <div className="flex justify-around items-center w-[80%] h-[50px]">
                                        <div
                                            className="flex items-center justify-center h-full w-[20%] mr-1 text-xl hover:font-bold hover:border-2 text-[#790729] border-[1px] border-[#790729] cursor-pointer">XS
                                        </div>
                                        <div
                                            className="flex items-center justify-center h-full w-[20%] mr-1 text-xl hover:font-bold hover:border-2 text-[#790729] border-[1px] border-[#790729] cursor-pointer">S
                                        </div>
                                        <div
                                            className="flex items-center justify-center h-full w-[20%] mr-1 text-xl hover:font-bold hover:border-2 text-[#790729] border-[1px] border-[#790729] cursor-pointer">M
                                        </div>
                                        <div
                                            className="flex items-center justify-center h-full w-[20%] mr-1 text-xl hover:font-bold hover:border-2 text-[#790729] border-[1px] border-[#790729] cursor-pointer">L
                                        </div>
                                        <div
                                            className="flex items-center justify-center h-full w-[20%] mr-1 text-xl hover:font-bold hover:border-2 text-[#790729] border-[1px] border-[#790729] cursor-pointer">XL
                                        </div>
                                    </div> : null //NO SPINNER NEEDED JUST ERASING SIZE IF NOT JERSEY
                                }
                                <p className="flex justify-start items-center w-[80%] h-[50px] my-2 text-3xl text-[#790729] border-b-[1px] border-gray-200">DESCRIPCIÓN</p>
                                <p className="text-lg">
                                    {details.description}
                                </p>

                                {!details.active && <div
                                    className="p-5 my-10 text-md text-gray-900 bg-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                                    role="alert">
                                    <span className="font-medium">
                                        Lo Sentimos! </span>
                                    Este producto no esta disponible temporalmente.
                                </div>}

                                {details.active ? <button onClick={handleClick}
                                         className="w-[8.5em] h-[3.5em] mt-4 rounded-md text-[#790729] shadow-md duration-300 hover:bg-[#790729] hover:text-white font-bold font-[Lato]">
                                    Al Carrito
                                </button> :
                                    <button disabled
                                    className="w-[8.5em] h-[3.5em] mt-4 rounded-md text-zinc-800 shadow-md duration-300 hover:bg-zinc-500 hover:text-white font-bold font-[Lato]">
                                    No Disponible
                                    </button>}

                            </div>
                        </div>
                    </section>


                    <ReviewSection/>

                </div>
            }
        </div>
    )

}

export default Details

