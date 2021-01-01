import * as acitonTypes from "../actions/acitonTypes"
import initialState from "./initialState"


export default function categoryListRecucer(state=initialState.categories,action) {
    switch (action.type) {
        case acitonTypes.GET_CATEGORIES_SUCCESS:
            
            return action.payload
    
        default:
            return state
    }
    
}