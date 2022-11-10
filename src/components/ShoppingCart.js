import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import ShoppingCartItem from './items/ShoppingCartItem'

const ShoppingCart = () => {
  const {cartItems} = useShoppingCart()
  
  return (
    <div className="shoppingcart offcanvas offcanvas-end" tabindex="-1" id="shoppingCart" aria-labelledby="shoppingCartLabel">
      <div className="offcanvas-header">
        <h4 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-light fa-bag-shopping me-2"></i>Shopping Cart</h4>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {
          cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />))
        }
      </div>
      <div className="checkout">
        <button className="button-theme">Check Out
          <div className="button-theme-border"></div>
        </button>
      </div>
    </div>
  )
}

export default ShoppingCart