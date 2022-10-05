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
    }, [dispatch, navigate]);

    function handleInputChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(clearProductsError())
        dispatch(getByName(name));
        delay(500).then(r => {
            dispatch(setCurrentProducts(1))
            setName("");
            navigate('/products')
        })
    }

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    return <div className="searchbar-ctn">
        <form onSubmit={handleSubmit} className='nav-form'>
            <input
                type="text"
                placeholder="Search..."
                value={name}
                onChange={handleInputChange}
                className='nav-input font-semibold'
            />
            <HiSearch size={50} style={{background: "#790729", color: "white" , borderRadius: "50%", padding: "10px" , marginLeft: "15px"}}/>
        </form>
    </div>
}