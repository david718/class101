import { IProductItemState } from "../states/state";
import coupons from "../src/assets/coupons";

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

export const getDiscountAndResultPrice = (
  couponType: "rate" | "amount",
  quantity: number,
  price: number
): { discount: number; resultPrice: number } => {
  let discount = 0;
  let resultPrice = 0;

  if (couponType === "rate") {
    coupons.forEach(coupon => {
      if (coupon.type === couponType) {
        if (coupon.discountRate !== undefined) {
          discount = Math.floor((quantity * price * coupon.discountRate) / 100);
          resultPrice = quantity * price - discount;
        }
      }
    });
  } else if (couponType === "amount") {
    coupons.forEach(coupon => {
      if (coupon.type === couponType) {
        if (coupon.discountAmount !== undefined) {
          discount = quantity * coupon.discountAmount;
          resultPrice = quantity * price - discount;
        }
      }
    });
  }

  return {
    discount: discount,
    resultPrice: resultPrice
  };
};
