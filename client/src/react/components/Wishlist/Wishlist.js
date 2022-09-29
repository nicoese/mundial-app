import {useSelector} from "react-redux";
import {useEffect} from "react";
import {ProductCard} from "../../elements/ProductCard";
import NavBar from "../NavBar/NavBar";

export const Wishlist = () => {

    const {favorites} = useSelector(state => state)

    useEffect(() => {
        return () => {
        };
    }, []);

    return <>
        <NavBar />
        <h2 className={'mt-40 ml-[15%] font-bold text-3xl text-[#790729]'}>Tus Favoritos</h2>
        <div className={'grid grid-cols-3 mt-12 self-center gap-6 mb-6'}>
            {favorites.length > 0 ? favorites.map(e => {
                return <ProductCard
                    id={e.id}
                    name={e.name}
                    brand={e.brand && e.brand}
                    price={e.price}
                    img={e.img}
                    stadium={e.stadium && e.stadium}
                />
            })
                : <h2 className={'col-span-3 text-xl mt-28'} >No has seleccionado ningun producto aun!</h2>
            }
        </div>
    </>
}