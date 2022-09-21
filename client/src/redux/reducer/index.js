import {
    FILTER,
    GET_ALL_PRODUCTS,
    SET_CURRENT_PRODUCTS,
    SET_SORT_CRITERIA,
    SHUFFLE_PRODUCTS,
    TEST_FILTERS,
    ADD_TO_CART,
    REMOVE_TO_CART
} from "../actions"
import {GET_BYNAME, GET_DETAILS} from "../actions";


const initialState = {
    products: [],
    productsLength: 0,
    productsPerPage: 20,
    currentPage: 0,
    currentProducts: [],
    ProductDetail: [],
    sortCriteria: '',
    cart: []
}


export const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        case SET_CURRENT_PRODUCTS:
            return {
                ...state,
                currentProducts: state.products.slice(
                    action.payload * state.productsPerPage - state.productsPerPage,
                    action.payload * state.productsPerPage
                ),
                currentPage: action.payload
            }
        case SHUFFLE_PRODUCTS:
            return {
                ...state,
                products: state.products.sort((a, b) => 0.5 - Math.random())
            }
        case SET_SORT_CRITERIA:
            const props = action.payload.split('-')
            return {
                ...state,
                products: props[1] === 'asc' ? state.products.sort((a, b) => {
                        return a[props[0]] < b[props[0]] ? -1 : 1
                    }) :
                    state.products.sort((a, b) => {
                        return a[props[0]] < b[props[0]] ? 1 : -1
                    })

            }
        case GET_DETAILS:
            return {
                ...state,
                ProductDetail: action.payload,
            };
        case GET_BYNAME:
            return {
                ...state,
                products: action.payload,
            };

        case FILTER:
            return {
                ...state,
                products: action.payload
            }
        // case TEST_FILTERS:
        //     return {
        //         ...state,
        //         products: state.products.filter(product => )
        //     }
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case REMOVE_TO_CART:
            return {
                ...state,
                cart: state.cart.filter((p) => p.id === action.payload)
            }
        default:
            return state
    }
}


