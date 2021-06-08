import React from "react";
import { connect } from "react-redux";
import {
  AddItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItemFromCart, AddItem, removeItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={cartItem.imageUrl} alt="item" />
    </div>
    <span className="name">{cartItem.name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeItem(cartItem)}>
        &#10094;
      </div>
      <span className="value">{cartItem.quantity}</span>
      <div className="arrow" onClick={() => AddItem(cartItem)}>
        &#10095;
      </div>
    </span>
    <span className="price">&euro;{cartItem.price}</span>
    <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>
      &#10005;
    </div>
  </div>
);

export default connect(null, { clearItemFromCart, removeItem, AddItem })(
  CheckoutItem
);
