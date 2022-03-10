import {

    ALL_PRODUCTS_REQUEST_BY_ID,
    ALL_PRODUCTS_SUCCESS_BY_ID,
    ALL_PRODUCTS_FAIL_BY_ID,


    CLEAR_ERRORS_BY_ID

} from '../Constrants/ProductConstrants'

console.log(products)
console.lod(acion)
export const productfindReducers = (state = { productsFind: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST_BY_ID:
            return {
                loading: true,
                productsFind: []
            }
        case ALL_PRODUCTS_SUCCESS_BY_ID:
            return {
                loading: false,
                products: action.payload.product,
               
            }
  
    }
}