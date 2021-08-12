const INCREMENT = "increment"
const DECREMENT = "decrement"
const ADD_PRODUCTS = "addProducts"

const initialState = {
    count: 0,
    products: [],
    alreadyGetData: true
}

export default function mainReducer( state = initialState, action ) {
    switch (action.type) {
        case INCREMENT : 
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT :
            return {
                ...state,
                count: state.count - 1
            }
        case ADD_PRODUCTS :
            return {
                ...state,
                products: state.products.concat(action.payload)
            }
        default : return state
    }
}

export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})
export const addProducts = (payload) => ({type: ADD_PRODUCTS, payload})