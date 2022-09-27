import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "../components/Landing/Landing.css"
import {addToFavorites, removeFromFavorites, addToCart} from "../../redux/actions";
import {useAuth0} from "@auth0/auth0-react";
import Swal from "sweetalert";
import {useEffect, useState} from "react"; //solo para tomar las fuentes


export const ProductCard = ({id, name, price, img, brand, stadium}) => {
    const dispatch = useDispatch()

    //estado para el renderizado del corazon (like)
    const [state, setState] = useState({
        liked: false
    });

    //traigo el estado de favoritos del usuario
    const favorites = useSelector(state => state.favorites)

    //traigo el user de auth0
    const {user, isAuthenticated} = useAuth0()

    useEffect(() => {

        //si el user esta logeado comparo el id de la card
        //con los favoritos del user
        if (isAuthenticated){

            const liked = favorites.find(e => e.id === id)
            //si existe en la lista muestro el producto
            //como likeado
            if (liked) toggleLike()
        }

    }, [favorites]);



    const handleClick = () => {

        if (!isAuthenticated){
            return Swal('Para realizar una compra deberas registrarte primero')
        } 

        
        dispatch(addToCart(user.email, {id, name, price, img, cantidad: 1} ))

        /* if (firstAdd === null) {
            localStorage.setItem(`${id}`, JSON.stringify({id, name, price, img, cantidad: 1}))
            Swal('Añadiste el Producto a tu carrito', '', 'success')

        } else {
            Swal({
                title: "Este producto ya fue añadido. Echale un vistazo al carrito!",
                icon: 'warning'
            })
        } */
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
        if (!isAuthenticated){
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
        <div className="flex flex-col pb-2 max-w-sm bg-white h-[400px] rounded-md" key={id}>
            {img ? (
                <Link to={`${id}`} className="flex items-center justify-center w-full h-[15em]">
                    <div className="flex items-center justify-center w-full h-[15em]">
                        <img className="h-[12em]" src={img} alt=""/>
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
                <p className="w-[4em] h-[1.5rem] ml-[1.7em] font-[Lato] text-md text-[#790729] font-semibold">{brand ? `${brand}` : stadium ? `${stadium}` : ""}</p>
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
