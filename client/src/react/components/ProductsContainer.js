import {useDispatch, useSelector} from "react-redux";
import {ProductCard} from "../elements/ProductCard";
import {Pagination} from "../elements/Pagination";
import {SortBy} from "../elements/SortBy";
import {FilterBy} from "../elements/FilterBy";
import {useEffect} from "react";
import {getFavorites, setCurrentProducts} from "../../redux/actions";
import Spinner from "./Spinner/Spinner";
import {useAuth0} from "@auth0/auth0-react";

export const ProductsContainer = (props) => {

    const dispatch = useDispatch()
    const {user, isAuthenticated} = useAuth0()
    const {productsError, currentProducts, currentPage} = useSelector(state => state)

    useEffect(() => {

        delay(1500).then(() => {
            dispatch(setCurrentProducts(currentPage))
        })

        isAuthenticated && dispatch(getFavorites(user.email))

        return () => {
        }

    }, [dispatch, currentPage, isAuthenticated])

    function delay(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    console.log(currentProducts[0])

    return <div key={'ajslkdfjalskdfja'}
                className={'w-full text-center flex flex-col items-center justify-center bg-[#f6f6f6] mt-24'}>
        {currentProducts.length > 0 ? <SortBy/> : <Spinner/>}
        <div className={'flex flex-row'}>
            {currentProducts.length > 0 ? <FilterBy/> : null}
            {
               productsError ? <div>{productsError}</div> : currentProducts.length > 0 ? <div key={"laksjdflak"}
                                                  className={'grid grid-cols-1 gap-4 lg:gap-5 lg:grid-cols-4 mx-5 bg-[#f6f6f6]'}>

                    {currentProducts.map(prod => {
                        return <ProductCard
                            key={prod.id}
                            id={prod._id}
                            name={prod.name}
                            price={prod.price}
                            img={prod.img && prod.img}
                            brand={prod.brand}
                            stadium={prod.stadium}
                            stock={prod.stock}
                        />
                    })}
                </div> : null
            }
        </div>
        <Pagination/>
    </div>
}