// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0

      cartList.forEach(eachCartItem => {
        total = total + eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <div className="cart-summary-data">
              <h1 className="order-total-value">
                Order Total:
                <span className="order-total-label"> Rs {total}/-</span>
              </h1>
              <p className="total-item">{cartList.length} Items in cart</p>
            </div>
            <button className="checkout-button d-sm-btn" type="button">
              Checkout
            </button>
            <button className="checkout-button d-lg-btn" type="button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
