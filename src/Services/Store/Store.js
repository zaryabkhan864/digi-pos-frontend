import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import { productReducers } from '../Reducers/ProductReducer'
import {  authReducer } from '../Reducers/userReducer';

const reducer = combineReducers({
    products: productReducers,
    auth : authReducer
})

let initialState = {}

const middleware = [thunk];
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store