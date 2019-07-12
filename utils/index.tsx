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

export const getDiscount = (couponType:string, quantity: number, price: number):object => {
  let discount = 0; 
  let resultPrice;

  coupons.forEach(coupon => {
    if (coupon.type === couponType) {
      if (coupon.discountRate !== undefined) {
        discount = Math.floor(
          (quantity * price * coupon.discountRate) / 100
        );
        resultPrice = quantity * price - discount;
      }
    }
  });

  return {
    discount: discount,
    resultPrice: resultPrice,
  }
}
