import * as actionTypes from "../actions/acitonTypes"
import initialState from "./initialState"

export default function changeCategoryReducer(state=initialState.currentCategort,action)
{
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            
            return action.payload;
    
        default:
            return state;
    }
}