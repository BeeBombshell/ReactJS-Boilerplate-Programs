//The reducer function takes the initial state and action.
//Here we've destructured the action into type and payload.

const initialState = {
    products: [{
        id: 1,
        title: 'Dipesh',
        category: 'programmer',
    },],
}

export const productReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_PRODUCTS":
            return state;
            break

        default:
            return state
            break
    }
}