import {useSelector} from "react-redux";
import {ProductCard} from "../elements/ProductCard";
import {Pagination} from "../elements/Pagination";
import {SortBy} from "../elements/SortBy";
import {useNavigate} from "react-router";

export const ProductsContainer = (props) => {

    const {currentProducts} = useSelector(state => state)

    return <div className={'text-center flex flex-col self-center'}>
            <SortBy />
            <div className={'grid grid-cols-4 gap-y-20 gap-1'}>
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