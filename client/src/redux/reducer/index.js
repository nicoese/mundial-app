
import { GET_BYNAME, GET_PRODUCTS } from "../actions";

const initialState = {
  products: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_BYNAME:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};