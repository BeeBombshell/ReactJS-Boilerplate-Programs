// Every action function returns a JS Object with a key as type and payload, which is the data.
// The payload is the data that is being sent to the reducer.
// The type is the key that is being used to identify the action.
// In the action setProducts, the payload is the array of products and the type is the action type SET_PRODUCTS.

import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProducts = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products,
    }
}