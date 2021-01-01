import * as actionTypes from "./acitonTypes"


export function getProductSuccess(product)
{
    return {type:actionTypes.GET_PRODUCTS_SUCCESS,payload:product}
}



export function getProduct(categoryId)
{
    return function (dispatch)
    {
        let url ="http://localhost:3006/product"
        if(categoryId)
        {
            url=url+"?categoryId="+categoryId;
        }
      return  fetch(url)
        .then(response=>response.json())
        .then(response=>dispatch(getProductSuccess(response)))
    }
        
    

}