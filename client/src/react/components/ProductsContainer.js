import {useDispatch, useSelector} from "react-redux";
import {ProductCard} from "../elements/ProductCard";
import {Pagination} from "../elements/Pagination";
import {SortBy} from "../elements/SortBy";
import {FilterBy} from "../elements/FilterBy";
import {useEffect} from "react";
import {getFavorites, setCurrentProducts} from "../../redux/actions";
import Spinner from "./Spinner/Spinner";
import {useAuth0} from "@auth0/auth0-react";
import Footer from "./Footer/Footer";

export const ProductsContainer = (props) => {

    const dispatch = useDispatch()
    const {user, isAuthenticated} = useAuth0()
    const {productsError, currentProducts, currentPage} = useSelector(state => state)

    
    useEffect(() => {
        
        // delay(1500).then(() => {
            dispatch(setCurrentProducts())
            // })
            
            isAuthenticated && dispatch(getFavorites(user.email))
            
            return () => {
            }

        }, [dispatch, isAuthenticated])
        
    function delay(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    return <div key={'ajslkdfjalskdfja'}
                className={'w-full flex flex-col items-center justify-center bg-[#f6f6f6] mt-24'}>
        {currentProducts.length > 0 ? <SortBy/> : <Spinner/>}
        <div className={'flex flex-row w-full'}>
            {currentProducts.length > 0 ? <FilterBy/> : null}
            {
                // productsError ? <div className={'w-[80vw] h-[75vh] py-[200px] px-[30%] font-["Lato"]' +
                productsError ? <div className={'w-[80vw] h-[75vh] overflow-hidden font-["Lato"]' +
                ' font-bold text-xl'}>{productsError}</div> : currentProducts.length > 0 ?
                    <div key={"laksjdflak"}
                         className={'ml-20 w-[auto] gap-5 grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 bg-[#f6f6f6]'}>

                        {currentProducts.map(prod => {
                            return <ProductCard
                                key={prod.id}
                                id={prod._id}
                                name={prod.name}
                                price={prod.price}
                                img={prod.img && prod.img}
                                brand={prod.brand}
                                stock={prod.stock}
                                stadium={prod.stadium}
                                active={prod.active}
                            />
                        })}
                    </div> : null
            }
        </div>
        <Pagination/>
        <Footer/>
    </div>
}