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
export const GET_ALL_PURCHASES = "GET_ALL_PURCHASES";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const GET_FAVORITES = "GET_FAVORITES"
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES"
export const PURCHASE_FAILED = "PURCHASE_FAILED"
export const GET_PRODUCT_REVIEWS = "GET_PRODUCT_REVIEWS"
export const CLEAR_PRODUCT_REVIEWS = "CLEAR_PRODUCT_REVIEWS"
export const POST_NEWPRODUCT = "POST_NEWPRODUCT"
export const GET_ALL_USERS = "GET_ALL_USERS"
export const DELETE_USER = "DELETE_USER";
export const ADD_USER_TO_DB =  "ADD_USER_TO_DB";
export const DISABLE_USER = "DISABLE_USER";
export const DISABLE_PRODUCT = "DISABLE_PRODUCT"
export const GET_ALL_PURCHASES_BY_USER_EMAIL = "GET_ALL_PURCHASES_BY_USER_EMAIL"
export const GET_ALL_REVIEWS_BY_USER_EMAIL = "GET_ALL_REVIEWS_BY_USER_EMAIL"
export const GET_ALL_REVIEWS_BY_PRODUCT_ID = "GET_ALL_REVIEWS_BY_PRODUCT_ID"
export const SAVE_PERSONAL_DATA = 'SAVE_PERSONAL_DATA'
export const GET_PERSONAL_DATA = 'GET_PERSONAL_DATA'
export const SET_USER_DATA_ERROR = 'SET_USER_DATA_ERROR'
export const CLEAR_USER_DATA_ERROR = 'CLEAR_USER_DATA_ERROR'
export const SAVE_REVIEW = 'SAVE_REVIEW'
export const REVIEW_ERROR = "REVIEW_ERROR"
export const CLEAR_REVIEW_MESSAGES = "CLEAR_REVIEW_MESSAGES"
export const FIND_USER_BY_EMAIL = "FIND_USER_BY_EMAIL"
export const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
export const DELETE_REVIEW = "DELETE_REVIEW"



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
    console.log(critearia)
    return async dispatch => {
        try {
            const json = await axios.post(`${REACT_APP_API_URL}/products/filtroscombinados`, critearia)
            console.log(json.data)
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

export const getAllPurchases = () =>{
    return async (dispatch) =>{
            try{
            let result = await axios.get(`${REACT_APP_API_URL}/purchases`)
            dispatch({
                type: GET_ALL_PURCHASES,
                payload: result.data
            })
        }catch(err){
            console.log(err)
        }
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

export const postNewProduct = (payload, cloudImg) => {
    return async function () {
            try{
            const info = await axios.post(`${REACT_APP_API_URL}/products/newProduct`, {payload,cloudImg} )
            return info
        }catch(err){
            console.log(err)
        }
    };
   
};

export const clearReviews = () => {
    return dispatch => {
        return dispatch({
            type: CLEAR_PRODUCT_REVIEWS
        })
    }
}

export const getAllUsers = () =>{
    return async dispatch =>{
            try{
            let response = await axios.get(`${REACT_APP_API_URL}/users`)
            dispatch({
                type: GET_ALL_USERS,
                payload: response.data
            })
        }catch(err){
            console.log(err)
        }
    }

}

export const delete_user = (userEmail) =>{
    return async dispatch =>{
            try{
            
            await axios.delete(`${REACT_APP_API_URL}/users/delete_user?email=${userEmail}`);

            dispatch({
                type: DELETE_USER,
                payload: userEmail
            })
        }catch(err){
            console.log(err)
        }
    }
}

export const addUserToDb = (user) =>{
    return async dispatch =>{
            try{
            let response = await axios.post(`${REACT_APP_API_URL}/users/add_user_to_db`,{user});
            dispatch({
                type: ADD_USER_TO_DB,
                payload: response.data
            })
        }catch(err){
            console.log(err)
        }
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


export const disableUser = (userEmail,active) =>{
    return async dispatch =>{
            try{
            let response = await axios.put(`${REACT_APP_API_URL}/users/disable?email=${userEmail}&active=${active}`);
            dispatch({
                type: DISABLE_USER,
                payload: response.data
            })
        }catch(err){
            console.log(err)
        }
    }
}

export const disableProduct = (productId,active) =>{
    return async dispatch =>{
            try{
            let response = await axios.put(`${REACT_APP_API_URL}/products/disable?id=${productId}&active=${active}`);
            dispatch({
                type: DISABLE_PRODUCT,
                payload: response.data
            })
        }catch(err){
            console.log(err)
        }
    }
}

export const savePersonalData = (personalData) => {
    return async dispatch => {
        return axios.post(`${REACT_APP_API_URL}/info/update`, personalData)
            .then(json => {
                return dispatch({
                    type: SAVE_PERSONAL_DATA,
                    payload: json.data
                })
            })
            .catch(err => {
                dispatch({
                    type: SET_USER_DATA_ERROR,
                    payload: err.message
                })
            })
    }
}


export const getPersonalData = (userEmail) => {
    return async dispatch => {
        return axios.get(`${REACT_APP_API_URL}/info?email=${userEmail}`)
            .then(json => {
                return dispatch({
                    type: GET_PERSONAL_DATA,
                    payload: json.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}


export const saveReview = (review) => {
    return async dispatch => {
        return axios.post(`${REACT_APP_API_URL}/reviews/add_review`, review)
            .then(json => {
                return dispatch({
                    type: SAVE_REVIEW,
                })
            })
            .catch(err => {
                return dispatch({
                    type: REVIEW_ERROR,
                })
            })
    }
}

export const clearReviewMessages = () => {
    return dispatch => {
        return dispatch({
            type: CLEAR_REVIEW_MESSAGES
        })
    }
}

export const findUserByEmail = (email) => {
    return async dispatch => {
        return axios.get(`${REACT_APP_API_URL}/users/${email}`)
            .then(json => {
                return dispatch({
                    type: FIND_USER_BY_EMAIL,
                    payload: json.data
                })
            })
            .catch(err => {
                console.log(err)
            })
export const getAllReviews = () =>{
    return async dispatch =>{
        try{
        let response = await axios.get(`${REACT_APP_API_URL}/reviews`);
        dispatch({
            type: GET_ALL_REVIEWS,
            payload: response.data
        })
    }catch(err){
        console.log(err)
    }
}
      
}

export const delete_review = (id) =>{
    return async dispatch =>{
            try{ 
            await axios.delete(`${REACT_APP_API_URL}/reviews/delete?id=${id}`);
            dispatch({
                type: DELETE_REVIEW,
                payload: id
            })
        }catch(err){
            console.log(err)
        }
    }
}



