import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts, setCurrentProducts, setSortCriteria} from "../../redux/actions";
import {useLocation, useNavigate} from "react-router";


export const SortBy = () => {

    const options = [
        {value: 'name-asc', name: 'Nombre A-Z'},
        {value: 'name-desc', name: 'Nombre Z-A'},
        {value: 'price-asc', name: 'Precio Menor a Mayor'},
        {value: 'price-desc', name: 'Precio Mayor a Menor'},
    ]

    const [sort_criteria, set_sort_criteria] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const {currentPage} = useSelector(state => state)

    useEffect( () => {

        delay(1200).then(e => {
            const queryList = getQueryList()
            if(queryList.length > 0){
                if (findSortQueryParam(queryList)){
                    const criteria = findSortQueryParam(queryList).sort
                    dispatchSorting(criteria)
                    const option = options.find(op => op.value === criteria)
                    set_sort_criteria(option.name)
                }

            }
        })

    }, [])

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    const handleChange = (ev) => {

        const criteriaHTML = ev.target[ev.target.selectedIndex]
        set_sort_criteria(criteriaHTML.innerText)

        dispatch(setSortCriteria(criteriaHTML.value))


        if (criteriaHTML.value) {

            const url = new URL(window.location.href)

            if (url.searchParams.get('sort')){
                url.searchParams.delete('sort')
            }


            url.searchParams.append('sort', criteriaHTML.value)

            navigate(url.search)
        }

        const queryList = getQueryList()
        const ifSorting = findSortQueryParam(queryList)
        dispatchSorting(ifSorting.sort)

    }

    const getQueryList = () => {
        const queryParams = Object.fromEntries(new URLSearchParams(window.location.search).entries())
        const queryList = []
        Object.keys(queryParams).map(key => {
            queryList.push({[key]: queryParams[key]})
        })
        return queryList && queryList
    }

    const findSortQueryParam = (queryList) => {
        return queryList.find(e => e.hasOwnProperty('sort'))
    }

     function dispatchSorting (ifSorting) {
        if(ifSorting){
            dispatch(setSortCriteria(ifSorting))
            dispatch(setCurrentProducts(currentPage))
        }
    }

    const handleClick = async (ev) => {
        set_sort_criteria('')
        await dispatch(getAllProducts())

        dispatch(setCurrentProducts(1))

        navigate(location.pathname)
        window.location.reload()
    }

    return <div className={'flex flex-col-reverse items-end justify-center w-[50%] p-10 sm:p-4'}>
        <select onChange={(event) => {
            handleChange(event)
        }} className={'my-4'} value={sort_criteria} name="select-sort" id="">
            <option>---</option>
            {options.map(op => {
                return <option key={op.name} value={op.value}>{op.name}</option>
            })}


        </select>
        {sort_criteria && <div className={'flex'}>
            <p className={'m-2'} >{sort_criteria}</p>
            <button onClick={handleClick}>❌</button>
        </div>}

    </div>
}