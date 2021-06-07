import React from "react";
import { connect } from "react-redux";
import { ToggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = (props) => (
  <div className="cart-icon" onClick={props.ToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default connect(null, { ToggleCartHidden })(CartIcon);
