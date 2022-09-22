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
export const REMOVE_TO_CART = "REMOVE_TO_CART";
export const UPDATE_TO_CART = "UPDATE_TO_CART";
export const RESET_DETAIL = "RESET_DETAIL"
export const PRODUCTS_NOT_FOUND = "PRODUCTS_NOT_FOUND"
export const DETAILS_ERROR = 'DETAILS_ERROR'
export const CLEAR_DETAILS_ERROR = 'CLEAR_DETAILS_ERROR'
export const CLEAR_PRODUCTS_ERROR = 'CLEAR_PRODUCTS_ERROR'


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
        }catch (err){
            return dispatch({
                type: DETAILS_ERROR,
                payload: 'Producto no encontrado'
            })
        }

    };

}

export function resetDetail(){
  return{
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
        }
        catch (err) {
            console.log(err)
        }

    }
}

export const addToCart = (product) => {
  return (dispatch) => {
    return dispatch({
      type: ADD_TO_CART,
      payload: product
    })
  }
}

export const removeToCart = (id) => {
  return (dispatch) => {
    return dispatch({
      type: REMOVE_TO_CART,
      payload: id
    })
  }
}
export const updateToCart = (id, price) => {
  return (dispatch) => {
    return dispatch({
      type: UPDATE_TO_CART,
      payload: [id, price]
    })
  }
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
