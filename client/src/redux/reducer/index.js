import {
    GET_BYNAME,
    GET_DETAILS,
    FILTER,
    GET_ALL_PRODUCTS,
    SET_CURRENT_PRODUCTS,
    SET_SORT_CRITERIA,
    SHUFFLE_PRODUCTS,
    ADD_TO_CART,
    REMOVE_TO_CART,
    CLEAR_CART,
    GET_CART,
    RESET_DETAIL,
    PRODUCTS_NOT_FOUND,
    DETAILS_ERROR,
    CLEAR_DETAILS_ERROR,
    CLEAR_PRODUCTS_ERROR,
    DISPATCH_PURCHASE,
    GET_LAST_PURCHASE,
    ADD_TO_FAVORITES,
    GET_FAVORITES,
    REMOVE_FROM_FAVORITES,
    PURCHASE_FAILED,
    GET_PRODUCT_REVIEWS,
    CLEAR_PRODUCT_REVIEWS
} from "../actions"


const initialState = {
    products: [],
    productsLength: 0,
    productsPerPage: 20,
    currentPage: 0,
    currentProducts: [],
    ProductDetail: {},
    sortCriteria: '',
    productsError: '',
    detailsError: '',
    purchase: {},
    purchaseStatus: '',
    mp_link: '',
    favorites: [],
    productReviews: [],
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
        case RESET_DETAIL:
            return {
                ...state,
                ProductDetail: []
            }
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

        case ADD_TO_CART:
            /* console.log( "reducer", action.payload.products) */
            return {
                ...state,
                cart: action.payload
            }
        case GET_CART:
            console.log( "reducer", action.payload)
            return {
                ...state,
                cart: action.payload
            }
        case REMOVE_TO_CART:
            /* console.log("reducer", action.payload) */
            return {
                ...state,
                cart: action.payload
            }
        case CLEAR_CART:
            /* console.log("reducer", action.payload) */
            return {
                ...state,
                cart: []
            }
        case PRODUCTS_NOT_FOUND:
            return {
                ...state,
                productsError: action.payload
            }

        case DETAILS_ERROR:
            return {
                ...state,
                detailsError: action.payload
            }

        case CLEAR_DETAILS_ERROR:
            return {
                ...state,
                detailsError: ''
            }
        case CLEAR_PRODUCTS_ERROR:
            return {
                ...state,
                productsError: ''
            }
        case DISPATCH_PURCHASE:
            return {
                ...state,
                mp_link: action.payload
            }

        case GET_LAST_PURCHASE:
            return {
                ...state,
                purchase: action.payload
            }
        case ADD_TO_FAVORITES:
            console.log(action.payload)
            return {
                ...state,
                favorites: action.payload.products
            }
        case GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            }
        case REMOVE_FROM_FAVORITES:
            console.log(action.payload)
            return {
                ...state,
                favorites: action.payload.products
            }
        case PURCHASE_FAILED:
            return {
                ...state
            }
        case GET_PRODUCT_REVIEWS:
            return {
                ...state,
                productReviews: action.payload
            }
        case CLEAR_PRODUCT_REVIEWS:
            return {
                ...state,
                productReviews: []
            }
        default:
            return state
    }
}


