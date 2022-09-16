import {useSelector} from "react-redux";
import {ProductCard} from "../elements/ProductCard";
import {Pagination} from "../elements/Pagination";
import {SortBy} from "../elements/SortBy";
import {useNavigate} from "react-router";

export const ProductsContainer = (props) => {

    const {currentProducts} = useSelector(state => state)

    return <div className={'w-full text-center flex flex-col items-center justify-center bg-[#f6f6f6]'}>
            <SortBy />
            <div className={'grid grid-cols-1 gap-4 lg:gap-5 lg:grid-cols-4 mx-5 bg-[#f6f6f6]'}>
                {currentProducts.length > 0 ? currentProducts.map(prod => {
                    return <ProductCard
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