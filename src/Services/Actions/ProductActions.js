import axios from 'axios';
import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_REQUEST_BY_ID,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    UPDATE_QUANTITY,
    ALL_PRODUCTS_SUCCESS_BY_ID,
    CLEAR_ERRORS
} from '../Constrants/ProductConstrants'

export const getProducts = () =>async (dispatch)=>{
    try {
        dispatch({type: ALL_PRODUCTS_REQUEST})
        const{ data } = await axios.get('/api/v1/products')
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
        
    }
}
export const getProductsbyFind = (myvariable) =>async (dispatch)=>{
    try {
        console.log(myvariable)
        dispatch({type: ALL_PRODUCTS_REQUEST_BY_ID})
        const{ data } = await axios.get(`/api/v1/product/${myvariable}`)
        console.log(data)
        dispatch({
            type: ALL_PRODUCTS_SUCCESS_BY_ID,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
        
    }
}
export const updateQuantity = (index, quantity) => (dispatch, state) => {
        const data = state.products;
 
    dispatch({
        type: UPDATE_QUANTITY,
        payload: {index, quantity}
    })
}
//clear errors
export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}