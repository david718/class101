import { IProductItemState } from "../states/state";

export const getDiscount = (
  price: number,
  couponType: undefined | string
): number => {
  if (couponType === "amount") {
    return price - 10000;
  } else if (couponType === "rate") {
    return Math.floor(price * 0.1);
  } else {
    return 0;
  }
};

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
