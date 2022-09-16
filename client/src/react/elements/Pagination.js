import {useDispatch, useSelector} from "react-redux";
import {setCurrentProducts} from "../../redux/actions";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export const Pagination = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        productsPerPage,
        products
    } = useSelector(state => state)

    useEffect( () => {

        delay(1200).then(e => {
            const url = new URL(window.location.href)
            const page = url.searchParams.get('page')

            if (page){
                dispatch(setCurrentProducts(Number(page)))
            }
            }
        )
    }, [dispatch])

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    const pageNumbers = []

    for (let i = 0; i < Math.ceil(products.length / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    const handleClick = (ev) => {
        const pageNumber = Number(ev.target.innerText)

        const url = new URL(window.location.href)

        if (url.searchParams.get('page')){
            url.searchParams.delete('page')
        }

        url.searchParams.append('page', pageNumber.toString())

        navigate(url.search)

        dispatch(setCurrentProducts(pageNumber))
    }

    return <div className={'p-10'}>
        {pageNumbers.map(number => <button className={'btn'} key={number} onClick={handleClick}>{number + 1}</button>)}
    </div>
}

