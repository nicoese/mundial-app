import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const SHUFFLE_PRODUCTS = "SHUFFLE_PRODUCTS";
export const SET_CURRENT_PRODUCTS = "SET_CURRENT_PRODUCTS";
export const SET_SORT_CRITERIA = "SET_SORT_CRITERIA";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_BYNAME = "GET_BYNAME";
export const GET_DETAILS = "GET_DETAILS";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export const getAllProducts = () => {
  return async (dispatch) => {
    const json = await axios.get(`${REACT_APP_API_URL}/products`);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: json.data,
    });
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

/* ACTIONS */
export function getProducts() {
  return async function (dispatch) {
    let products = await axios.get(`http://localhost:3001/(completarruta)`);
    dispatch({
      type: GET_PRODUCTS,
      payload: products.data,
    });
  };
}

export function getByName(name) {
  return async function (dispatch) {
    console.log(name);
    try {
      const json = await axios.get(
        `${REACT_APP_API_URL}/products/find?name=${name}`
      );
      return dispatch({
        type: GET_BYNAME,
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
export function getDetails(id) {
    return async function (dispatch) {
        const json = await axios.get(`${REACT_APP_API_URL}/products/` + id);
        dispatch({
            type: GET_DETAILS,
            payload: json.data,
        });
    };
}