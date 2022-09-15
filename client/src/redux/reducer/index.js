import {GET_ALL_PRODUCTS, SET_CURRENT_PRODUCTS, SHUFFLE_PRODUCTS} from "../actions"

const initialState = {
    products: [],
    productsPerPage: 20,
    currentPage: 0,
    currentProducts: [],
    ProductDetail: {},

}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: [...action.payload.jerseys, ...action.payload.accessories, ...action.payload.tickets],
            }

        case SET_CURRENT_PRODUCTS:
            return {
                ...state,
                currentProducts: state.products,
                currentPage: action.payload
            }
        case SHUFFLE_PRODUCTS:
            return {
                ...state,
                products: state.products.sort((a, b) => 0.5 - Math.random())
            }


        default:
            return state
    }
}
