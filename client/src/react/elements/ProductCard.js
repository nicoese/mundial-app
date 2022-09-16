import {Link} from "react-router-dom";


export const ProductCard = ({id, key, name, price, img, brand, stadium}) => {


    return <Link to={`${id}`}>
        <div key={key} className={'flex flex-col items-center'}>
            {img ? <img className={'w-52'} src={img} alt=""/> : 'no available image'}
            <p>{name}</p>
            <p>$ {new Intl.NumberFormat().format(price)}</p>
            <p>{brand ? `marca ${brand}` : stadium ? `estadio ${stadium}` : ''}</p>
            <button className={'btn'}>❤</button>
            <button className={'btn'}>Add to cart </button>
        </div>
    </Link>


}