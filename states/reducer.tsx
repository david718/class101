import { IState } from "./state";
import * as types from "./actionTypes";
import { productItems } from "../src/assets/productItems";
import { changeProductItemState } from "../utils/";

const productItemStatesArr = productItems.map(productItem => {
  return {
    id: productItem.id,
    selected: false,
    checked: false,
    quantity: 1,
    value: productItem
  };
});

const initialState: IState = {
  page: 1,
  productItemArr: productItemStatesArr,
  couponType: "none"
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.ITEM_SELECT:
      const selectedProductItemArr = changeProductItemState(
        productItemStatesArr,
        action.id,
        "selected",
        undefined
      );
      return {
        ...state,
        productItemArr: selectedProductItemArr
      };

    case types.ITEM_CHECK:
      const checkedProductItemArr = changeProductItemState(
        productItemStatesArr,
        action.id,
        "checked",
        undefined
      );
      return {
        ...state,
        productItemArr: checkedProductItemArr
      };

    case types.ITEM_QUANTITY_CHANGE:
      const quantityChangedProductItemArr = changeProductItemState(
        productItemStatesArr,
        action.id,
        "quantity",
        action.quantityValue
      );
      return {
        ...state,
        productItemArr: quantityChangedProductItemArr
      };

    case types.COUPON_CHANGE:
      return {
        ...state,
        couponType: action.couponType
      };

    default:
      return state;
  }
};
