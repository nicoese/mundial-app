import {useEffect, useState} from "react";
import {setCurrentProducts} from "../../redux/actions";
import {useNavigate} from "react-router";

export const FilterBy = () => {

    const navigate = useNavigate()

    const productCategory = {
        name: 'Categoria de Producto',
        filters: [
            {name: 'Indumentaria', value: 'clothes'},
            {name: 'Accesorios', value: 'accessories'},
            {name: 'Entradas', value: 'entradas'}
        ]
    }

    const genres = [
        {name: 'Hombre', value: 'male'},
        {name: 'Mujer', value: 'female'},
        {name: 'Sin genero', value: 'unisex'}
    ]

    const [filters, setFilters] = useState({
        clothes: {checked: false, value: 'clothes', type: 'category'},
        accessories: {checked: false, value: 'accessories', type: 'category'},
        entradas: {checked: false, value: 'entradas', type: 'category'},
        male: {checked: false, value: 'male', type: 'gender'},
        female: {checked: false, value: 'female', type: 'gender'},
        unisex: {checked: false, value: 'unisex', type: 'gender'},
        price: {checked: false, min: '', max: '', type: 'price'},
    })

    useEffect(() => {
        const url = new URL(window.location.href)

        let queryFilter = []
        let minmax = []


        for (const e of url.searchParams.keys()) {

            if (url.searchParams.get(e).includes('-') && (e === 'category' || e === 'gender')) {

                queryFilter = queryFilter
                    .concat(url.searchParams.get(e).split('-').map(elem => {
                            return {
                                key: e,
                                value: elem
                            }
                        }))
            } else {
                if (e === 'min' || e === 'max') {
                    minmax.push(url.searchParams.get(e))
                }
                queryFilter.push({
                    key: e,
                    value: url.searchParams.get(e)
                })
            }
        }


        queryFilter.forEach(e => {
            if (e.key === 'min' || e.key === 'max') {
                filters["price"].min = minmax[0]
                filters["price"].max = minmax[1]
            } else {
                filters[e.value].checked = true
            }
        })

    }, [])

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    const handleChange = (ev) => {

        setFilters({
            ...filters,
            [ev.target.value]: {
                ...filters[ev.target.value],
                checked: ev.target.checked
            }
        })
    }


    const handleClick = (ev) => {


        if (filters.entradas.checked) {
            filters.male.checked = false
            filters.female.checked = false
            filters.unisex.checked = false
        }

        const filtersList = Object.keys(filters)
            .map((key) => {
                return filters[key].checked ? key === 'price' ?
                    {[filters[key].type]: {min: filters[key].min, max: filters[key].max}} :
                    {[filters[key].type]: filters[key].value} : ''
            })
            .filter(e => e);

        const category = filtersList.filter(e => e.hasOwnProperty('category')).map(e => e.category).join('-')
        const gender = filtersList.filter(e => e.hasOwnProperty('gender')).map(e => e.gender).join('-')
        const min = filtersList.filter(e => e.hasOwnProperty('price')).map(e => e.price.min).shift()
        const max = filtersList.filter(e => e.hasOwnProperty('price')).map(e => e.price.max).shift()

        const url = new URL(window.location.href)

        if (url.searchParams.get('category')) url.searchParams.delete('category')
        if (url.searchParams.get('gender')) url.searchParams.delete('gender')
        if (url.searchParams.get('min')) url.searchParams.delete('min')
        if (url.searchParams.get('max')) url.searchParams.delete('max')

        if (category.length > 0) url.searchParams.append('category', category)
        if (gender.length > 0) url.searchParams.append('gender', gender)
        if (min) url.searchParams.append('min', min)
        if (max) url.searchParams.append('max', max)
        navigate(url.search)

        const filter_dispatch = filtersList.map(elem => {

            const key = Object.keys(elem)[0]

            if (key !== 'price') {
                return {
                    key: key,
                    value: elem[key]
                }
            }
        }).filter(e => e)

        if (min) {
            filter_dispatch.push({key: 'min', value: min})
        }

        if (max){
            filter_dispatch.push({key: 'max', value: max})
        }

        console.log(filtersList)
        console.log(filter_dispatch)


    }

    const handlePrice = (ev) => {
        const checked = !Number.isNaN(Number(ev.target.value))

        setFilters({
            ...filters,
            price: {
                ...filters["price"],
                [ev.target.name]: ev.target.value,
                checked: checked
            }
        })

        //checked: parseInt(filters["price"].max) > parseInt(filters["price"].min) ? checked : false
    }

    return <div className={'flex flex-col'}>
        <h2>filtros</h2>

        <div id={'category'}>
            <h3>{productCategory.name}</h3>
            {productCategory.filters.map(fil => {
                return <label className={'flex flex-row py-1'} htmlFor={fil.name} key={fil.name} name={fil.name}>
                    <input onChange={handleChange} id={fil.name} value={fil.value} checked={filters[fil.value].checked}
                           type="checkbox"/>
                    <p className={'mx-1'}>{fil.name}</p>
                </label>
            })}
        </div>


        {!filters.entradas.checked && <div id={'genderInputs'}>
            <h3>Genero</h3>
            <div className="flex flex-col">

                {genres.map(e => {
                    return <label className={'flex  my-1 '} htmlFor={e.value}>
                        <input onChange={handleChange} id={e.value} value={e.value} name={e.value}
                               checked={filters[e.value].checked} type="checkbox"/>
                        <p className={'mx-1'}>{e.name}</p>
                    </label>
                })
                }

            </div>
        </div>}

        <div className={'py-5'}>
            <h3>Rango de Precios</h3>
            <div className={'flex justify-center'}>

                <input onChange={handlePrice} className={'w-12 text-center m-5 border-2 outline-0'}
                       value={filters.price.min} name={'min'} placeholder={'Min'} type="text"/>
                <p className={'my-5'}>-</p>
                <input onChange={handlePrice} className={'w-12 text-center m-5 border-2 outline-0'}
                       value={filters.price.max} name={'max'} placeholder={'Max'} type="text"/>
            </div>
            <button onClick={handleClick} className={'btn '}>Aplicar</button>
        </div>


    </div>
}

