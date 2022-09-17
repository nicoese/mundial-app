import {useEffect, useState} from "react";

export const FilterBy = () => {

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

    const [typeFilter, setTypeFilter] = useState({
        [productCategory.filters[0].value]: false,
        [productCategory.filters[1].value]: false,
        [productCategory.filters[2].value]: false,
    });

    const [priceRange, setRange] = useState({
        min: '',
        max: '',
    })

    const [genre, setGenre] = useState({
        male: false,
        female: false,
        unisex: false
    })


    useEffect(() => {

    }, [])

    const handleChange = (ev) => {
        setTypeFilter({
            ...typeFilter,
            [ev.target.value]: ev.target.checked
        })
        const category = document.getElementById('category')
        // if (ev.target.checked) return category.style.display = 'none'
        // category.style.display = ''

    }

    const handleGenre = (ev) => {
        setGenre({
            ...genre,
            [ev.target.name]: ev.target.checked
        })
    }

    const handleClick = (key) => {
        setTypeFilter({
            ...typeFilter,
            [key]: false
        })
        const category = document.getElementById('category')
        category.style.display = ''
    }

    const handlePrice = (ev) => {

        console.log(ev.target.id)

        setRange({
            ...priceRange,
            [ev.target.name]: ev.target.value
        })
    }

    //todo: genero
    //todo: rango de precios


    return <div className={'flex flex-col'}>
        <h2>filtros</h2>

        {/*{Object.keys(typeFilter).map(key => {*/}
        {/*    return typeFilter[key] &&*/}
        {/*        <div className={'flex'}>*/}
        {/*            {productCategory.filters.find(e => e.value === key).name}*/}
        {/*            <button onClick={() => handleClick(key)}>X</button>*/}
        {/*        </div>*/}
        {/*})}*/}

        <div id={'category'}>
            <h3>{productCategory.name}</h3>
            {productCategory.filters.map(fil => {
                return <label className={'flex flex-row py-1'} htmlFor={fil.name} key={fil.name} name={fil.name}>
                    <input onChange={handleChange} id={fil.name} checked={typeFilter[fil.value]} value={fil.value}
                           type="checkbox"/>
                    <p className={'mx-1'}>{fil.name}</p>
                </label>
            })}
        </div>

        <div className={'py-5'}>
            <h3>Rango de Precios</h3>
            <div className={'flex justify-center'}>

                <input onChange={handlePrice} className={'w-12 text-center m-5 border-2 outline-0'}
                       value={priceRange.min} name={'min'} placeholder={'Min'} type="text"/>
                <p className={'my-5'}>-</p>
                <input onChange={handlePrice} className={'w-12 text-center m-5 border-2 outline-0'}
                       value={priceRange.max} name={'max'} placeholder={'Max'} type="text"/>
            </div>
            <button className={'btn'}>Aplicar</button>
        </div>


        <div>
            <h3>Genero</h3>
            <div className="flex flex-col">

                {genres.map(e => {
                    return <label className={'flex  my-1 '} htmlFor={e.value}>
                        <input onChange={handleGenre} id={e.value} name={e.value} type="checkbox"/>
                        <p className={'mx-1'}>{e.name}</p>
                    </label>
                })
                }

            </div>
        </div>

    </div>
}

