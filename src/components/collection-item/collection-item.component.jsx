import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { AddItem, ToggleCartHidden } from "../../redux/cart/cart.actions";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem, ToggleCartHidden }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    />
    <div className="collection-footer">
      <span className="name">{item.name}</span>
      <span className="price">{item.price}&euro;</span>
    </div>
    <CustomButton
      onClick={() => {
        addItem(item);
        alert("Press OK to continue");
      }}
    >
      Add to cart
    </CustomButton>
  </div>
);

const mapDispatchToProp = (dispatch) => ({
  addItem: (item) => dispatch(AddItem(item)),
});

export default connect(null, mapDispatchToProp)(CollectionItem);
