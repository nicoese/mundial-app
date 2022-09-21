import {useSelector} from "react-redux";
import {ProductCard} from "../elements/ProductCard";
import {Pagination} from "../elements/Pagination";
import {SortBy} from "../elements/SortBy";
import {FilterBy} from "../elements/FilterBy";

export const ProductsContainer = (props) => {

    const {currentProducts} = useSelector(state => state)

    return <div key={'ajslkdfjalskdfja'} className={'w-full text-center flex flex-col items-center justify-center bg-[#f6f6f6] mt-24'}>
            <SortBy />

        <div className={'flex flex-row'}>
            <FilterBy />
            {
            currentProducts.length > 0 ? <div key={"laksjdflak"} className={'grid grid-cols-1 gap-4 lg:gap-5 lg:grid-cols-4 mx-5 bg-[#f6f6f6]'}>
            
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
            </div>:<div className="flex w-full items-center justify-center">
            <img className="w-[300px] h-[300px]" src="https://bit.ly/3dmUbMK"></img></div>
            }
        </div>
        <Pagination/>
    </div>
}