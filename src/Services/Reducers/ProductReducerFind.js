import {

    ALL_PRODUCTS_REQUEST_BY_ID,
    ALL_PRODUCTS_SUCCESS_BY_ID,
    ALL_PRODUCTS_FAIL_BY_ID,


    CLEAR_ERRORS_BY_ID

} from '../Constrants/ProductConstrants'
export const productReducersById = (state = { product: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST_BY_ID:
            return {
                loading: true,
                product: []
            }
        case ALL_PRODUCTS_SUCCESS_BY_ID:
            return {
                loading: false,
                product: [action.payload.product],
                // productsCount: action.payload.productsCount
            }
 
        case ALL_PRODUCTS_FAIL_BY_ID:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS_BY_ID:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}