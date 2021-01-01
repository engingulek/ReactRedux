import * as actionTypes from "./acitonTypes"

export function changeCategory(category)
{
    return {type:actionTypes.CHANGE_CATEGORY,payload:category}
}



export function getCategorySuccess(categories)
{
    return{type:actionTypes.GET_CATEGORIES_SUCCESS,payload:categories}
}


export function getCategories()
{
    return function(dispatch)
    {
        let url ="http://localhost:3002/categories"
       return fetch(url)
        .then(response=>response.json())
        .then(response=>dispatch(getCategorySuccess(response)))
    }
}