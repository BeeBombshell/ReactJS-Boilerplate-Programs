//The combineReducers function takes an object of reducers and returns a single reducer function.
//We can define any key in the object in the returned reducer function.
//Here, we have set allProducts as the key and productReducer as the value.

import { combineReducers } from 'redux'
import { productReducer } from './productReducers'


const reducers = combineReducers({
    allProducts: productReducer,
})

export default reducers