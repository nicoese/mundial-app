import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import {clearProductsError, getByName, setCurrentProducts} from "../../redux/actions";
import {HiSearch} from "react-icons/hi";


export const SearchBar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState("");

    useEffect(() => {
        const url = new URL(window.location)
        const search = url.searchParams.get('search')



        if (search) {

            console.log(search)

            delay(1600)
                .then(() => {
                    dispatch(getByName(search))
                    delay(1000)
                        .then(() => {
                            dispatch(setCurrentProducts(1))
                            navigate(url.search)
                        })
                })

        }
    }, []);


    function handleInputChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(clearProductsError())
        dispatch(getByName(name));
        delay(1500).then(r => {
            dispatch(setCurrentProducts(1))
            setName("");
            if (name) return navigate(`/products?search=${name}`)
            navigate('/products')
        })

    }

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    return <div className="searchBar_search">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                value={name}
                onChange={handleInputChange}
            />
            <div className="searchBar_btn">
                <button className="search_btn-submit">
                    <HiSearch size={23}/>
                </button>
            </div>
        </form>
    </div>
}