import {useAuth0} from "@auth0/auth0-react";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {ProductCard} from "../../elements/ProductCard";


export const Wishlist = () => {

    const {user} = useAuth0()
    const {favorites} = useSelector(state => state)


    useEffect(() => {
        return () => {
        };
    }, []);



    return <div>
        {favorites && favorites.map(e => {
            return <ProductCard
                id={e.id}
                name={e.name}
                brand={e.brand && e.brand}
                price={e.price}
                img={e.img}
                stadium={e.stadium && e.stadium}
            />
        })}
    </div>
}