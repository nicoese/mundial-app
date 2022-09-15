import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts, setCurrentProducts, setSortCriteria, shuffleProducts} from "../../redux/actions";
import {useLocation, useNavigate} from "react-router";
import {Link, Router} from "react-router-dom";


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

    useEffect(async () => {

        await delay(1200)

        const queryList = getQueryList()
        if(queryList.length > 0){
            if (findSortQueryParam(queryList)){
                const criteria = findSortQueryParam(queryList).sort
                dispatchSorting(criteria)
                const option = options.find(op => op.value === criteria)
                set_sort_criteria(option.name)
            }

        }

    }, [])

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    const handleChange = (ev) => {

        console.log(ev.target.selectedIndex)

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
        console.log(ifSorting)
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

    const dispatchSorting = (ifSorting) => {
        if(ifSorting){
            dispatch(setSortCriteria(ifSorting))
            return dispatch(setCurrentProducts(currentPage))
        }
    }

    const handleClick = async (ev) => {
        set_sort_criteria('')
        await dispatch(getAllProducts())

        // dispatch(shuffleProducts())
        dispatch(setCurrentProducts(1))


        navigate(location.pathname)
    }

    return <div>
        <select onChange={(event) => {
            console.log(event.target.selectedIndex)
            handleChange(event)
        }} className={'my-4'} value={sort_criteria} name="select-sort" id="">
            <option>---</option>
            {options.map(op => {
                return <option value={op.value}>{op.name}</option>
            })}


        </select>
        {sort_criteria && <div>
            <p>{sort_criteria}</p>
            <button onClick={handleClick}>❌</button>
        </div>}

    </div>
}