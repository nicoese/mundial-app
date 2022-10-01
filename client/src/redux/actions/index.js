import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const SHUFFLE_PRODUCTS = "SHUFFLE_PRODUCTS";
export const SET_CURRENT_PRODUCTS = "SET_CURRENT_PRODUCTS";
export const SET_SORT_CRITERIA = "SET_SORT_CRITERIA";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_BYNAME = "GET_BYNAME";
export const TEST_FILTERS = 'TEST_FILTERS'
export const GET_DETAILS = "GET_DETAILS";
export const FILTER = "FILTER";
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_CART = "GET_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";
export const CLEAR_CART = "CLEAR_CART";
export const RESET_DETAIL = "RESET_DETAIL"
export const PRODUCTS_NOT_FOUND = "PRODUCTS_NOT_FOUND"
export const DETAILS_ERROR = 'DETAILS_ERROR'
export const CLEAR_DETAILS_ERROR = 'CLEAR_DETAILS_ERROR'
export const CLEAR_PRODUCTS_ERROR = 'CLEAR_PRODUCTS_ERROR'
export const DISPATCH_PURCHASE = "DISPATCH_PURCHASE"
export const GET_LAST_PURCHASE = "GET_LAST_PURCHASE"
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const GET_FAVORITES = "GET_FAVORITES"
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES"
export const PURCHASE_FAILED = "PURCHASE_FAILED"
export const GET_PRODUCT_REVIEWS = "GET_PRODUCT_REVIEWS"
export const CLEAR_PRODUCT_REVIEWS = "CLEAR_PRODUCT_REVIEWS"
export const POST_NEWPRODUCT = "POST_NEWPRODUCT"
export const GET_ALL_PURCHASES_BY_USER_EMAIL = "GET_ALL_PURCHASES_BY_USER_EMAIL"
export const GET_ALL_REVIEWS_BY_USER_EMAIL = "GET_ALL_REVIEWS_BY_USER_EMAIL"
export const GET_ALL_REVIEWS_BY_PRODUCT_ID = "GET_ALL_REVIEWS_BY_PRODUCT_ID"


const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export const getAllProducts = () => {
    return async (dispatch) => {
        return axios.get(`${REACT_APP_API_URL}/products`)
            .then(json => {
                dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: json.data,
                })
            })
            .catch(err => {
                return dispatch({
                    type: PRODUCTS_NOT_FOUND,
                    payload: 'No se han encontrado productos'
                })
            })
    };
};

export const shuffleProducts = () => {
    return (dispatch) => {
        return dispatch({
            type: SHUFFLE_PRODUCTS,
        });
    };
};

export const setCurrentProducts = (pageNumber) => {
    return (dispatch) => {
        return dispatch({
            type: SET_CURRENT_PRODUCTS,
            payload: pageNumber ? pageNumber : 1,
        });
    };
};

export const setSortCriteria = (criteria) => {
    return (dispatch) => {
        return dispatch({
            type: SET_SORT_CRITERIA,
            payload: criteria,
        });
    };
};

export const testFilters = (filters) => {
    return dispatch => {
        return dispatch({
            type: TEST_FILTERS,
            payload: filters
        })
    }
}

export function getByName(name) {
    return async function (dispatch) {
        try {
            const json = await axios.get(`${REACT_APP_API_URL}/products/find?name=${name}`);
            if (json.data.length === 0) {
                throw new Error('Products not found')
            }
            return dispatch({
                type: GET_BYNAME,
                payload: json.data,
            });
        } catch (err) {
            return dispatch({
                type: PRODUCTS_NOT_FOUND,
                payload: 'No se han encontrado productos'
            })
        }
    };
}

export function getDetails(id) {
    return async function (dispatch) {
        try {
            const json = await axios.get(`${REACT_APP_API_URL}/products/` + id);
            dispatch({
                type: GET_DETAILS,
                payload: json.data,
            });
        } catch (err) {
            return dispatch({
                type: DETAILS_ERROR,
                payload: 'Producto no encontrado'
            })
        }

    };

}

export function resetDetail() {
    return {
        type: RESET_DETAIL
    }


}

export const filter = (critearia) => {
    return async dispatch => {
        try {
            const json = await axios.post(`${REACT_APP_API_URL}/products/filtroscombinados`, critearia)
            return dispatch({
                type: FILTER,
                payload: json.data
            })
        } catch (err) {
            console.log(err)
        }

    }
}

export const addToCart = ( userEmail, product) => {
    return async (dispatch) => {
        return axios.post(`${REACT_APP_API_URL}/carts/add_to_cart`, {
            product: product,
            userEmail: userEmail
        }).then(res => {
            return dispatch({
                type: ADD_TO_CART,
                payload: res.data
            })
        }).catch(err => {
                console.log(err)
            })
    }
}

export const getProductsInCart = (userEmail) => {
    return async (dispatch) => {
        console.log('action', userEmail);
        return axios.get(`${REACT_APP_API_URL}/carts?email=${userEmail}`)
            .then(json => {
                return dispatch({
                    type: GET_CART,
                    payload: json.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const removeToCart = (userEmail, productId) => {
    return async (dispatch) => {
        /* console.log("action", userEmail, productId) */
        return axios.put(`${REACT_APP_API_URL}/carts/remove_from_cart`, {
            userEmail,
            productId
        })
            .then(json => {
                return dispatch({
                    type: REMOVE_TO_CART,
                    payload: json.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const cleanCart = (userEmail) => {
    return dispatch => {
        return axios.delete(`${REACT_APP_API_URL}/carts/clear_cart?email=${userEmail}`)
            .then(json => {
                return dispatch({
                    type: CLEAR_CART
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

}

export function buyDetail(buyDetail) {
    return async function (dispatch) {
        try {

            const response = await axios.post(`${REACT_APP_API_URL}/mp`, buyDetail);
            console.log(response.data)
            return dispatch({
                type: DISPATCH_PURCHASE,
                payload: response.data
            })
        } catch (err) {
            console.log(err)
        }
    };
}

export const clearDetailsErr = () => {
    return (dispatch) => {
        return dispatch({
            type: CLEAR_DETAILS_ERROR
        })
    }
}
export const clearProductsError = () => {
    return (dispatch) => {
        return dispatch({
            type: CLEAR_PRODUCTS_ERROR
        })
    }
}

export const getLastPurchase = (userEmail) => {
    return async (dispatch) => {
        return axios.get(`${REACT_APP_API_URL}/purchases/last_purchase?email=${userEmail}`)
            .then(json => {
                return dispatch({
                    type: GET_LAST_PURCHASE,
                    payload: json.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const addToFavorites = (product, userEmail) => {
    return async (dispatch) => {
        return axios.post(`${REACT_APP_API_URL}/favorites/add`, {
            product: product,
            userEmail: userEmail
        })
            .then(json => {
                return dispatch({
                    type: ADD_TO_FAVORITES,
                    payload: json.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getFavorites = (userEmail) => {
    return async (dispatch) => {
        return axios.get(`${REACT_APP_API_URL}/favorites/?email=${userEmail}`)
            .then(json => {
                return dispatch({
                    type: GET_FAVORITES,
                    payload: json.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const removeFromFavorites = (productId, userEmail) => {
    return async (dispatch) => {
        console.log(productId, userEmail)
        return axios.put(`${REACT_APP_API_URL}/favorites/delete`, {
            userEmail,
            productId
        })
            .then(json => {
                return dispatch({
                    type: REMOVE_FROM_FAVORITES,
                    payload: json.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const purchaseFailed = (userEmail) => {
    return async (dispatch) => {
        return axios.put(`${REACT_APP_API_URL}/purchases/purchase_failed?email=${userEmail}`)
            .then(json => {
                dispatch({
                    type: PURCHASE_FAILED,
                    payload: json.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getReviews = (productId) => {
    return async dispatch => {
        return axios.get(`${REACT_APP_API_URL}/reviews?id=${productId}`)
            .then(json => {
                return dispatch({
                    type: GET_PRODUCT_REVIEWS,
                    payload: json.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const postNewProduct = (payload) => {
    return async function () {
        const info = await axios.post(`${REACT_APP_API_URL}/products/newProduct`, payload)
        return info
    };
};

export const clearReviews = () => {
    return dispatch => {
        return dispatch({
            type: CLEAR_PRODUCT_REVIEWS
        })
    }
}

export const getAllPurchasesByUserEmail = (userEmail) => {
    return async dispatch => {
        return axios.get(`${REACT_APP_API_URL}/purchases/all?userEmail=${userEmail}`)
            .then(json => {
                return dispatch({
                    type: GET_ALL_PURCHASES_BY_USER_EMAIL,
                    payload: json.data
                })
            })
            .catch(err => console.log(err))
    }
}

export const getAllReviewsByUserEmail = (userEmail) => {
    return async dispatch => {
        return axios.get(`${REACT_APP_API_URL}/reviews?email=${userEmail}`)
            .then(json => {
                return dispatch({
                    type:GET_ALL_REVIEWS_BY_USER_EMAIL,
                    payload: json.data
                })
            })
            .catch(err => console.log(err))
    }

}
export const getAllReviewsByProductId = (productId) => {
    return async dispatch => {
        return axios.get(`${REACT_APP_API_URL}/reviews?id=${productId}`)
            .then(json => {
                return dispatch({
                    type:GET_ALL_REVIEWS_BY_PRODUCT_ID,
                    payload: json.data
                })
            })
            .catch(err => console.log(err))
    }

}


