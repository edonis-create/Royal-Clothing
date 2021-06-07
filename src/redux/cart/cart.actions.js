import { ADD_ITEM, TOGGLE_CART_HIDDEN } from "./cart.types";

export const ToggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const AddItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
