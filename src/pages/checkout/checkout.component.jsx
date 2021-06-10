import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span style={{ color: "#ffdf6c" }}>Product</span>
      </div>
      <div className="header-block">
        <span style={{ color: "#ffdf6c" }}>Description</span>
      </div>
      <div className="header-block">
        <span style={{ color: "#ffdf6c" }}>Quantity</span>
      </div>
      <div className="header-block">
        <span style={{ color: "#ffdf6c" }}>Price</span>
      </div>
      <div className="header-block">
        <span style={{ color: "#ffdf6c" }}>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span style={{ color: "#ffdf6c" }}>Total: &euro;{total}</span>
      <div className="test-warning" style={{ color: "red" }}>
        *PLEASE USE THE FOLLOWING TEST CREDIT CARD CREDENTIALS *
        <br />
        4242 4242 4242 4242 - EXP:01/20 - CVV:123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
