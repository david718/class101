import { IState } from "./state";
import * as types from "./actionTypes";
import { productItems } from "../src/assets/productItems";

const productItemStatesArr = productItems.map(productItem => {
  return {
    id: productItem.id,
    selected: false,
    checked: false,
    quantity: 0,
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
    case types.UPDATE_ANNOUNCEMENT:
      return Object.assign({}, state, { message: action.message });

    case types.ITEM_SELECT:
      const toggledProductItemArr = productItemStatesArr.map(
        productItemState => {
          if (productItemState.id === action.id) {
            productItemState.selected = !productItemState.selected;
            return productItemState;
          }
          return productItemState;
        }
      );

      return {
        ...state,
        productItemArr: toggledProductItemArr
      };
    default:
      return state;
  }
};
