import {useDispatch, useSelector} from "react-redux";
import {ProductCard} from "../elements/ProductCard";
import {Pagination} from "../elements/Pagination";
import {SortBy} from "../elements/SortBy";
import {FilterBy} from "../elements/FilterBy";
import {useEffect} from "react";
import {clearProductsError, setCurrentProducts} from "../../redux/actions";
import {useLocation} from "react-router";
import Spinner from "./Spinner/Spinner";
import {SearchBar} from "../elements/SearchBar";

export const ProductsContainer = (props) => {

    const dispatch = useDispatch()
    const location = useLocation()
    const {productsError, currentProducts, currentPage} = useSelector(state => state)


    useEffect(() => {

        delay(1500).then(() => {
            dispatch(setCurrentProducts(currentPage))
        })

        return () => {
        }

    }, [dispatch])


    function delay(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }


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
                        />
                    })}
                </div> : null
            }
        </div>
        <Pagination/>
    </div>
}

{/* <div className="flex w-full items-center justify-center">
            <img className="w-[300px] h-[300px]" src="https://bit.ly/3dmUbMK"></img>
            </div> */
} //viejo spinner de la copa que no lo tenemos como img incorporado.