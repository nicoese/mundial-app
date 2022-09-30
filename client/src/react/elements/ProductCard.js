import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "../components/Landing/Landing.css"
import {addToFavorites, removeFromFavorites, addToCart} from "../../redux/actions";
import {useAuth0} from "@auth0/auth0-react";
import Swal from "sweetalert";
import {useEffect, useState} from "react"; //solo para tomar las fuentes


export const ProductCard = ({id, name, price, img, brand, stadium, stock}) => {
    const dispatch = useDispatch()

    //estado para el renderizado del corazon (like)
    const [state, setState] = useState({
        liked: false
    });

    //traigo el estado de favoritos del usuario
    const favorites = useSelector(state => state.favorites)
    const cart = useSelector(state => state.cart)

    //traigo el user de auth0
    const {user, isAuthenticated} = useAuth0()

    useEffect(() => {

        //si el user esta logeado comparo el id de la card
        //con los favoritos del user
        if (isAuthenticated) {

            const liked = favorites.find(e => e.id === id)
            //si existe en la lista muestro el producto
            //como likeado
            if (liked) toggleLike()
        }

    }, [favorites, id, isAuthenticated]);


    const handleClick = () => {

        if (!isAuthenticated) {
            return Swal('Para realizar una compra deberas registrarte primero')
        }

        
        if (!cart.find(e => e.id === id)) {
            dispatch(addToCart(user.email, {id, name, price, img, cantidad: 1, stock}))
            Swal('Añadiste el Producto a tu carrito', '', 'success')
        } else {
            Swal({
                title: "Este producto ya fue añadido. Echale un vistazo al carrito!",
                icon: 'warning'
            })
        }
    }


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
            dispatch(addToFavorites({id, name, price, img, brand, stadium}, user.email))
        }

        //si la tarjeta tiene el corazon rojo elimino el prod de favoritos
        if (ev.target.innerText === "❤") {
            //igualmente envio el id del prod y el user email
            dispatch(removeFromFavorites(id, user.email))
            toggleDislike()
        }
        // toggleLike()
    }

    return (
        <div
            className="flex flex-col pb-2 max-w-sm hover:shadow-[#790729] shadow-lg shadow-black bg-white h-[400px] rounded-[15px]"
            key={id}>
            {img ? (
                <Link to={`${id}`} className="flex items-center justify-center w-full h-[15em] ">
                    <div className="flex items-center justify-center w-full h-[15em]">
                        <img className="h-[12em]" src={img} alt=""/>
                    </div>
                </Link>
            ) : (
                "no available image"
            )}
            <div className="flex items-start w-full pl-[0.5em] pr-[0.5em]">
                <p className="text-[1.1rem] w-[100%] text-start font-semibold font-[Lato] truncate tracking-wide">
                    <Link className="rounded-md cursor-pointer" to={`${id}`}>{name}</Link>
                </p>
            </div>
            <div className="mb-4 mt-1">
                <p className="font-[Lato] text-xl w-full text-start pl-[0.5em] ">${new Intl.NumberFormat().format(price)}</p>
                <p className="w-[100%] h-[1.5rem] text-start pl-[0.5em] font-[Lato] text-md text-[#790729] font-semibold">{brand ? `${brand}` : stadium ? `${stadium}` : ""}</p>
            </div>
            <div className="w-full flex items-center justify-around">
                <button onClick={() => handleClick()}
                        className="w-[8em] h-[2.3em] mr-2 rounded-md bg-[#790729] hover:bg-red-800 text-white font-bold font-[Lato]"> Al
                    Carrito
                </button>
                <button onClick={handleLike}
                        className=" flex items-center justify-center h-[2.3em] ml-[3em] rounded-md p-2 border-2
                  border-[#790729] text-[#790729] font-bold"
                >
                    {/*busco el producto en el arreglo de favoritos del user
                    en el estado global si lo encuentro el corazon que muestro es
                    el rojo */}
                    {/*{favorites.length > 0 ? favorites.find(fav => fav.id === id) ?  : "🤍" : "🤍"}*/}
                    {state.liked ? "❤" : "🤍"}
                </button>
            </div>
        </div>
    );
};
