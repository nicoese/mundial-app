
/* import axios from 'axios' */

import axios from "axios";

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const SHUFFLE_PRODUCTS = 'SHUFFLE_PRODUCTS'
export const SET_CURRENT_PRODUCTS = 'SET_CURRENT_PRODUCTS'

const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export const getAllProducts = () => {
    return async (dispatch) => {
        const json = await axios.get(`${REACT_APP_API_URL}/products`)
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: json.data
        })

    }
}

export const shuffleProducts = () => {
    return (dispatch) => {
        return dispatch({
            type: SHUFFLE_PRODUCTS
        })
    }
}

export const setCurrentProducts = (pageNumber) => {
    return dispatch => {
        return dispatch({
            type: SET_CURRENT_PRODUCTS,
            payload: 1
        })
    }
}