import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from "../../redux/actions/productsActions"
import * as cartActions from "../../redux/actions/cartActionsTypes"



 class Product extends Component {
componentDidMount()
{
  this.props.actions.getProduct()
}

addProduct=(product)=>
{
  console.log(product)
this.props.actions.addCart(product)

}



    render() {
        return (
          
          <div className="row">
      
          {this.props.products.map((product)=>(
            <div className="col-lg-4"  key={product.productId}>
              <div className="card mb-4 shadow-sm">
                <img src={product.productUrl} className="card-img-top" alt="Sample Movie" />
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-count">{product.productCount}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      type="button"
                      className="btn btn-md btn-outline-success"
                      onClick={()=>this.addProduct(product)}
                    >
                      Add to Cart
                    </button>
    
                    <h2>
                      <span className="badge badge-info">{product.rating}</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}


      


        
           
          </div>
        );
    }
}

function mapStateToProps (state)
{
    return {
        products:state.productReducer,
        currentCategory:state.changeCategoryReducer,
        cart:state.cartReducer
       
      
     
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        actions :{
            getProduct:bindActionCreators(productActions.getProduct,dispatch),
            addCart:bindActionCreators(cartActions.addProductToCart,dispatch),
            getCart:bindActionCreators(cartActions.getProductFromCart,dispatch)
        
            
           
            
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)