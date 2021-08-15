const ADD_PRODUCTS = "addProducts"
const MODAL = "modal"
const ADD_COMMENTS = "addComments"

const initialState = {
    products: [],
    modal: false,
    openProductId: 0,
    comments: []
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
                products: action.payload
            }
        case ADD_COMMENTS :
            return {
                ...state,
                comments: action.payload
            }
        default : return state
    }
}

export const addProducts = (payload) => ({type: ADD_PRODUCTS, payload})
export const addComments = (payload) => ({type: ADD_COMMENTS, payload})
export const modal = (payload) => ({type: MODAL, payload})