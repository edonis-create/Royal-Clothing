import React from "react";
import { connect } from "react-redux";
import { ToggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg";
import "./cart-icon.styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = (props) => (
  <div className="cart-icon" onClick={props.ToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{props.itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, { ToggleCartHidden })(CartIcon);
