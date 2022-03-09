import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    UPDATE_QUANTITY,

    CLEAR_ERRORS
} from '../Constrants/ProductConstrants'
export const productReducers = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }
        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount
            }
        case UPDATE_QUANTITY:
            const { index, quantity } = action.payload;
            const prods = state.products.map((p, i) => {
                if (i !== index)
                    return p;
                return {
                    ...p,
                    quantity
                }
            });
            return {
                loading: true,
                products: prods
            }

        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}
