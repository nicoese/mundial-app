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
    CLEAR_PRODUCT_REVIEWS,
    POST_NEWPRODUCT,
    GET_ALL_USERS,
    DELETE_USER,
    GET_ALL_PURCHASES,
    ADD_USER_TO_DB,
    DISABLE_USER,
    DISABLE_PRODUCT,
    PUT_PRODUCT,
    GET_ALL_PURCHASES_BY_USER_EMAIL,
    GET_ALL_REVIEWS_BY_USER_EMAIL,
    GET_ALL_REVIEWS_BY_PRODUCT_ID,
    SAVE_PERSONAL_DATA,
    GET_PERSONAL_DATA,
    SAVE_REVIEW,
    REVIEW_ERROR,
    CLEAR_REVIEW_MESSAGES,
    SAVE_PROFILE_PICTURE,
    CLEAR_REVIEW_MESSAGES,
    FIND_USER_BY_EMAIL,
    GET_ALL_REVIEWS,
    DELETE_REVIEW,

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
    allPurchases: [],
    mp_link: '',
    favorites: [],
    productReviews: [],
    cart: [],
    userPurchases: [],
    userReviews: [],
    users: [],
    userData: '',
    userDataError: '',
    userDataMessage: '',
    reviewMessage: '',
    reviewError: '',
    user: '',
    allReviews: [],
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
        case GET_ALL_PURCHASES:
            return {
                ...state,
                allPurchases: action.payload
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
        case POST_NEWPRODUCT:
            return {
                ...state
            }
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(u => u.email !== action.payload)
            }
        case DISABLE_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.email === action.payload.email) {
                        return {
                            ...u,
                            active: action.payload.active
                        }
                    }
                    return u
                })
            }
        case DISABLE_PRODUCT:
            return {
                ...state,
                products: state.products.map(p => {
                    if (p._id == action.payload._id) {
                        return {
                            ...p,
                            active: action.payload.active
                        }
                    }
                    return p
                })
            }
        case ADD_USER_TO_DB:
            return {
                ...state,
                user: [...state.users, action.payload]
            }

        case GET_ALL_PURCHASES_BY_USER_EMAIL:
            return {
                ...state,
                userPurchases: action.payload
            }
        case GET_ALL_REVIEWS_BY_USER_EMAIL:
            return {
                ...state,
                userReviews: action.payload
            }
        case GET_ALL_REVIEWS_BY_PRODUCT_ID:
            return {
                ...state,
                productReviews: action.payload
            }
        case SAVE_PERSONAL_DATA:
            return {
                ...state,
                userData: action.payload,

            }
        case GET_PERSONAL_DATA:
            return {
                ...state,
                userData: action.payload,
                userDataMessage: "Tus datos se guardaron satisfactoriamente!"
            }
        case SAVE_REVIEW:
            return {
                ...state,
                reviewMessage: "Tu reseña fue añadida satisfactoriamente!"
            }
        case REVIEW_ERROR:
            return {
                ...state,
                reviewError: "Solo podes añadir una reseña por producto"
            }
        case CLEAR_REVIEW_MESSAGES:
            return {
                ...state,
                reviewMessage: '',
                reviewError: ''
            }
        case SAVE_PROFILE_PICTURE:
        return {
                ...state,
                user: action.payload
            }
        case FIND_USER_BY_EMAIL:
            return {
                ...state,
                user: action.payload
            }

            case GET_ALL_PURCHASES_BY_USER_EMAIL:
                return{
                    ...state,
                    userPurchases: action.payload
                }
                case GET_ALL_REVIEWS_BY_USER_EMAIL:
                return{
                    ...state,
                    userReviews: action.payload
                }
            case GET_ALL_REVIEWS_BY_PRODUCT_ID:
                return {
                    ...state,
                    productReviews: action.payload
                }
            case PUT_PRODUCT:
                return {
                    ...state
                }
        case GET_ALL_REVIEWS:
            return{
                ...state,
                allReviews: action.payload
            }
        case DELETE_REVIEW:
            return {
                ...state,
                allReviews: state.allReviews.filter(r => r.id !== action.payload)
            }
        

        default:
            return state
    }
}


