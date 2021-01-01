// Burası reducerlarımızı topladığımız yerdir.
import {combineReducers} from "redux"
import categoryListReducer from "./categoryListReducer"
import productReducer from "./productReducer"
import changeCategoryReducer from "./changeCategoryReducer"
import cartReducer from "./cartReducer"






const rootReducer = combineReducers({

    categoryListReducer,
    productReducer,
    changeCategoryReducer,
    cartReducer
    


    



})
export default rootReducer;
