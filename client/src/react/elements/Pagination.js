import {useDispatch, useSelector} from "react-redux";
import {setCurrentProducts} from "../../redux/actions";
import {useEffect} from "react";

export const Pagination = () => {
    const dispatch = useDispatch()
    const {
        productsPerPage,
        products
    } = useSelector(state => state)

    useEffect(() => {

        delay(4000).then(e => {
                const url = new URL(window.location)
                const page = url.searchParams.get('page')

                if (page) {
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

        if (url.searchParams.get('page')) {
            url.searchParams.delete('page')
        }

        url.searchParams.append('page', pageNumber.toString())

        dispatch(setCurrentProducts(pageNumber))
    }

    return <div className={'flex justify-end my-10'}>
        {pageNumbers.map(number => <button className={'w-[2.7rem] h-[2.3rem] mx-1 rounded-md bg-[#790729] text-white font-semibold}'} key={number} onClick={handleClick}>{number + 1}</button>)}
    </div>
}

