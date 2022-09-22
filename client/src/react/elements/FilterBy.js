import {useEffect, useState} from "react";
import {clearProductsError, filter, setCurrentProducts} from "../../redux/actions";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";

export const FilterBy = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const productType = {
        name: 'Categoria de Producto',
        filters: [
            {name: 'Accesorios', value: 'accessory'},
            {name: 'Entradas', value: 'ticket'},
            {name: 'Indumentaria', value: 'jersey'}
        ]
    }

    const brands = {
        name: 'Marca',
        brands: [
            {name: 'Adidas', value: 'adidas'},
            {name: 'Marathon', value: 'marathon'},
            {name: 'Nike', value: 'nike'},
            {name: 'Puma', value: 'puma'},
        ]
    }

    const [filters, setFilters] = useState({
        jersey: {checked: false, value: 'jersey', key: 'type'},
        accessory: {checked: false, value: 'accessory', key: 'type'},
        ticket: {checked: false, value: 'ticket', key: 'type'},
        nike: {checked: false, value: 'Nike', key: 'brand'},
        marathon: {checked: false, value: 'Marathon', key: 'brand'},
        puma: {checked: false, value: 'Puma', key: 'brand'},
        adidas: {checked: false, value: 'Adidas', key: 'brand'},
        min: {checked: false, min: '', key: 'min'},
        max: {checked: false, max: '', key: 'max'},
    })

    // useEffect(() => {
    //     const url = new URL(window.location.href)
    //
    //     let queryFilter = []
    //     let minmax = []
    //
    //
    //     for (const e of url.searchParams.keys()) {
    //
    //         if (e === 'sort' || e === 'page') continue
    //
    //         if (url.searchParams.get(e).includes('-') && (e === 'category' || e === 'gender')) {
    //
    //             queryFilter = queryFilter
    //                 .concat(url.searchParams.get(e).split('-').map(elem => {
    //                     return {
    //                         key: e,
    //                         value: elem
    //                     }
    //                 }))
    //         } else {
    //             if (e === 'min' || e === 'max') {
    //                 minmax.push(url.searchParams.get(e))
    //             }
    //             queryFilter.push({
    //                 key: e,
    //                 value: url.searchParams.get(e)
    //             })
    //         }
    //     }
    //
    //     queryFilter.forEach(e => {
    //         if (e.key === 'min' || e.key === 'max') {
    //             filters["price"].min = minmax[0]
    //             filters["price"].max = minmax[1]
    //             filters["price"].checked = true
    //         } else {
    //             filters[e.value].checked = true
    //         }
    //     })
    //
    //     const filter_dispatch = queryFilter.map(e => {
    //         return {
    //             type: e.value
    //         }
    //     })
    //
    //     console.log(filter_dispatch)
    //
    //     // dispatch(filter(filter_dispatch))
    //
    //     // delay(2000)
    //     //     .then(e => {
    //     //         dispatch(setCurrentProducts(1))
    //     //     })
    //
    //
    //
    // }, [])

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


        ///todo: cuando seteo los filtros vuelvo a la pag 1


        if (filters.ticket.checked || filters.accessory.checked) {
            filters.nike.checked = false
            filters.adidas.checked = false
            filters.puma.checked = false
            filters.marathon.checked = false
        }

        const filtersList = Object.keys(filters)
            .map((key) => {

                if (filters[key].checked) {
                    if (key === 'min' || key === 'max') {
                        return {[filters[key].key]: filters[key][key]}
                    } else {
                        return {[filters[key].key]: filters[key].value}
                    }
                }
            })
            .filter(e => e);

        const url = new URL(window.location.href)

        if (url.searchParams.get('type')) url.searchParams.delete('type')
        if (url.searchParams.get('brand')) url.searchParams.delete('brand')
        if (url.searchParams.get('min')) url.searchParams.delete('min')
        if (url.searchParams.get('max')) url.searchParams.delete('max')
        if (url.searchParams.get('page')) url.searchParams.delete('page')

        filtersList.map(e => {
            const key = Object.keys(e)[0]

            if (url.searchParams.get(key)) {
                let queryParam = url.searchParams.get(key)
                queryParam += `-${e[key]}`
                url.searchParams.delete(key)
                url.searchParams.append(key, queryParam)
            } else {
                url.searchParams.append(key, e[key])
            }
        })


        navigate(url.search)

        let filter_dispatch = {
            type:[],
            brand: [],
            min: [],
            max: []
        }

        filtersList.map(e => {
            const key = Object.keys(e)[0]
               if (e[key]) filter_dispatch[key].push(e)
        })

        if (filter_dispatch.type.length === 0) filter_dispatch.type.push({})
        if (filter_dispatch.brand.length === 0) filter_dispatch.brand.push({})
        if (filter_dispatch.min.length === 0) filter_dispatch.min.push({})
        if (filter_dispatch.max.length === 0) filter_dispatch.max.push({})

        dispatch(filter(filter_dispatch))

        delay(1000).then(()=>{
            dispatch(setCurrentProducts(1))
        })

        dispatch(clearProductsError())

    }

    const handlePrice = (ev) => {
        const checked = !Number.isNaN(Number(ev.target.value))

        setFilters({
            ...filters,
            [ev.target.name]: {
                ...filters[ev.target.name],
                [ev.target.name]: ev.target.value,
                checked: checked
            },
        })
    }

    return <div className={'flex flex-col'}>
        <h2>filtros</h2>

        <div id={'category'}>
            <h3>{productType.name}</h3>
            {productType.filters.map(fil => {
                return <label className={'flex flex-row py-1'} htmlFor={fil.name} key={fil.name} name={fil.name}>
                    <input onChange={handleChange} id={fil.name} value={fil.value} checked={filters[fil.value].checked}
                           type="checkbox"/>
                    <p className={'mx-1'}>{fil.name}</p>
                </label>
            })}
        </div>


        {!filters.ticket.checked && !filters.accessory.checked && <div id={'genderInputs'}>
            <h3>{brands.name}</h3>
            <div className="flex flex-col">

                {brands.brands.map(e => {
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
                       value={filters.min.value} name={'min'} placeholder={'Min'} type="text"/>
                <p className={'my-5'}>-</p>
                <input onChange={handlePrice} className={'w-12 text-center m-5 border-2 outline-0'}
                       value={filters.max.value} name={'max'} placeholder={'Max'} type="text"/>
            </div>
            <button onClick={handleClick} className={'btn '}>Aplicar</button>
        </div>


    </div>
}

///todo: make useEffect filter component
///todo: routing and redirections
///todo: error handling