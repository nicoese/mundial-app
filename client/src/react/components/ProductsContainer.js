import {useSelector} from "react-redux";
import {ProductCard} from "../elements/ProductCard";
import {Pagination} from "../elements/Pagination";
import {SortBy} from "../elements/SortBy";

export const ProductsContainer = (props) => {

    const {currentProducts} = useSelector(state => state)

    return <div key={'ajslkdfjalskdfja'} className={'w-full text-center flex flex-col items-center justify-center bg-[#f6f6f6]'}>
            <SortBy />
            <div key={"laksjdflak"} className={'grid grid-cols-1 gap-4 lg:gap-5 lg:grid-cols-4 mx-5 bg-[#f6f6f6]'}>
                {currentProducts.length > 0 ? currentProducts.map(prod => {
                    return <ProductCard
                        key={prod.id}
                        id={prod._id}
                        name={prod.name}
                        price={prod.price}
                        img={prod.img && prod.img}
                        brand={prod.brand}
                        stadium={prod.stadium}
                    />
                }): <p className={'btn'}> No se encontraron resultados</p>}
            </div>
            <Pagination/>

    </div>
}