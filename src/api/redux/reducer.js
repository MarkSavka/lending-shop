const ADD_PRODUCTS = "addProducts"
const MODAL = "modal"

const initialState = {
    products: [],
    modal: false
}

export default function mainReducer( state = initialState, action ) {
    switch (action.type) {
        case MODAL :
            return {
                ...state,
                modal: action.payload
            }
        case ADD_PRODUCTS :
            return {
                ...state,
                products: state.products.concat(action.payload)
            }
        default : return state
    }
}

export const addProducts = (payload) => ({type: ADD_PRODUCTS, payload})
export const modal = (payload) => ({type: MODAL, payload})