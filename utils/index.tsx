import { IProductItemState } from "../states/state";

export const changeProductItemState = (
  productItemStatesArr: Array<IProductItemState>,
  id: string,
  property: "checked" | "selected" | "quantity",
  quantityValue: undefined | number
) => {
  return productItemStatesArr.map(productItemState => {
    if (productItemState.id === id) {
      if (property === "quantity") {
        productItemState[property] = quantityValue;
      } else {
        productItemState[property] = !productItemState[property];
      }
      return productItemState;
    }
    return productItemState;
  });
};
