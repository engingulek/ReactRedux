import * as actionTypes from "./acitonTypes";
import axios from "axios"


export function addProductToCartSuccess(product) {
  return { type: actionTypes.ADD_PRODUCT_TO_CART_SUCCESS, payload: product };
}

export function getProductFromCartSuccess(product)
{
  return {type:actionTypes.GET_PRODUCT_FROM_CART_SUCCESS,payload:product}
}

export function removeProductFromCartSuccess(product)
{
  return {type:actionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS,payload:product}
}

export function removeProductFromCart(id)
{
  return function(dispatch)
  {
    
    axios.delete("http://localhost:3004/cart/"+id)

  }
}


export function getProductFromCart()
{
  return function(dispatch)
  {
    let url="http://localhost:3004/cart"
    return fetch(url)
    .then(response=>response.json())
    .then(response=>dispatch(getProductFromCartSuccess(response)))
  }
}


export function addProductToCart(product)
{
    return function(dispatch)
    {
        let url="http://localhost:3004/cart"
        axios.post(url,product)
    }
}