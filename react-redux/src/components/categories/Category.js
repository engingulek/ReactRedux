import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
   } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productsActions";
import { connect } from "react-redux";
import * as cartActions from "../../redux/actions/cartActionsTypes"

class Cart extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
    this.props.actions.getCart()
  }

  selectedCategory = (category) => {
    this.props.actions.getProducts(category.id);
    this.props.actions.changeCategory(category);
  };

  removeProduct=(id)=>
  {
    console.log(id)
    this.props.actions.removeCart(id)
    this.props.actions.getCart()
  }
 
  render() {
  
    return (
      <div>
    
        <h3>
          <Badge color="warning">Categories</Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>

        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              key={category.id}
              onClick={() => this.selectedCategory(category)}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <UncontrolledDropdown   >
                <DropdownToggle color="success" caret>
                  <Badge color="primary">{this.props.cart.length}</Badge>
                  Dropdown
                </DropdownToggle>
                
                <DropdownMenu>
                  
                   
              {this.props.cart.map((cartItem,index)=>(
           <DropdownItem key={index}>
           <Badge color="danger"
           onClick={()=>this.removeProduct(cartItem.id)}>
             X
           </Badge>
                      {cartItem.productName}
                    </DropdownItem>
        ))}
                 
                </DropdownMenu>
              </UncontrolledDropdown>


        
       

   

      </div>
    );
  }
}

function mapStatefromProps(state) {
  return {

    categories: state.categoryListReducer,

    currentCategory: state.changeCategoryReducer,
    
    cart:state.cartReducer
  };
}

function mapDispatchProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProduct, dispatch),

      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getCart:bindActionCreators(cartActions.getProductFromCart,dispatch),
      removeCart:bindActionCreators(cartActions.removeProductFromCart,dispatch)
    },
  };
}

export default connect(mapStatefromProps, mapDispatchProps)(Cart);
