import React from "react";
import { IProductItemState } from "../../../states/state";
import { getDiscountAndResultPrice } from "../../../utils/";

interface Props {
  item: IProductItemState;
  onCheck: any;
  onQuantity: any;
  couponType: "none" | "rate" | "amount";
}

const WishedProductItem: React.SFC<Props> = ({
  item,
  onCheck,
  onQuantity,
  couponType
}) => {
  const { id, checked, quantity, value } = item;
  const { title, coverImage, price, availableCoupon } = value;

  let discount = 0;
  let resultPrice;

  if (quantity !== undefined) {
    if (availableCoupon !== false) {
      if (couponType === "none") {
        discount = 0;
        resultPrice = quantity * price;
      } else if (couponType === "rate") {
        discount = getDiscountAndResultPrice(couponType, quantity, price)
          .discount;
        resultPrice = getDiscountAndResultPrice(couponType, quantity, price)
          .resultPrice;
      } else if (couponType === "amount") {
        discount = getDiscountAndResultPrice(couponType, quantity, price)
          .discount;
        resultPrice = getDiscountAndResultPrice(couponType, quantity, price)
          .resultPrice;
      }
    } else {
      discount = 0;
      resultPrice = quantity * price;
    }
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          onCheck(id);
        }}
      />
      <span>
        <img style={{ width: 140, height: 140 }} src={coverImage} />
      </span>
      <span>{title}</span>
      <span>
        <select
          value={quantity}
          onChange={(e: any) => {
            onQuantity(id, e.currentTarget.value);
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </span>
      <span>{price}원</span>
      <span>
        {availableCoupon === false ? "쿠폰 적용 불가" : `${discount}원`}
      </span>
      <span>{resultPrice}원</span>
    </div>
  );
};

export default WishedProductItem;
