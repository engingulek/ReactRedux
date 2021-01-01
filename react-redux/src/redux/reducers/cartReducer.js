import * as acitonTypes from "../actions/acitonTypes"
import initialState from "./initialState"


export default function cartReducer(state=initialState.cart,action)
{
    switch (action.type) {
        case acitonTypes.ADD_PRODUCT_TO_CART_SUCCESS:
            
        return action.payload

        case acitonTypes.GET_PRODUCT_FROM_CART_SUCCESS:
            return action.payload

        case acitonTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS:
            return action.payload
    
        default:
            return state
    }
}