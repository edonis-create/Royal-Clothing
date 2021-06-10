import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (selectShop) => selectShop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  (selectShopItems) =>
    Object.keys(selectShopItems).map((key) => selectShopItems[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopItems],
    (selectShopItems) => selectShopItems[collectionUrlParam]
  );
