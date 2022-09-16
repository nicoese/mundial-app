import NavBar from "./NavBar/NavBar";
import {ProductsContainer} from "./ProductsContainer";


export const Products = () => {

    return <div className={'flex flex-col'}>
        <NavBar/>
        <ProductsContainer />
    </div>
}
