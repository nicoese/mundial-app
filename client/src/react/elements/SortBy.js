import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentProducts, setSortCriteria} from "../../redux/actions";
import {useNavigate} from "react-router";


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
    const {currentPage} = useSelector(state => state)

    const handleChange = (ev) => {

        const criteriaHTML = ev.target[ev.target.selectedIndex]
        set_sort_criteria(criteriaHTML.innerText)

        if (criteriaHTML.value) {

            const url = new URL(window.location.href)

            if (url.searchParams.get('sort')) {
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
        Object.keys(queryParams).forEach( key =>  {
            queryList.push({[key]: queryParams[key]})
        })
        return queryList && queryList
    }

    const findSortQueryParam = (queryList) => {
        return queryList.find(e => e.hasOwnProperty('sort'))
    }

    function dispatchSorting(ifSorting) {
        if (ifSorting) {
            dispatch(setSortCriteria(ifSorting))
            dispatch(setCurrentProducts(currentPage))
        }
    }

    // return <div className={'flex flex-col-reverse ml-[69%] mb-4 mt-6 justify-center w-[15%]'}>
    return <div className={'flex mb-4 mt-6 w-[71%] flex-row-reverse'}>
        <select
            onChange={(event) => {
            handleChange(event)
        }} className={'flex outline-transparent focus:border-none focus:outline-none ' +
        'rounded-full text-[#790729] font-semibold'}
            value={sort_criteria} name="select-sort" id="">
            
            <option>{!sort_criteria?"Seleccione un Ordenamiento": "Orden: " + sort_criteria}</option>
            {options.map(op => {
                return <option key={op.name} value={op.value}>{op.name}</option>
            })}
        </select>
    </div>
}