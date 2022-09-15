
import axios from "axios";
/* export const getState = () => {

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
} */

/* TYPES */
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_BYNAME = "GET_BYNAME";

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
    try {
      const json = await axios.get("http://localhost:3001/(completarruta)?name=" + name);
      return dispatch({
        type: GET_BYNAME,
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
