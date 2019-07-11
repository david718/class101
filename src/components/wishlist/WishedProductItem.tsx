import React from "react";
import { IProductItemState } from "../../../states/state";
import { getDiscount } from "../../../utils/";

interface Props {
  item: IProductItemState;
  couponType: "none" | "rate" | "amount";
}

const WishedProductItem: React.SFC<Props> = ({
  item,
  couponType
}) => {
  const { id, checked, quantity, value } = item;
  const { title, coverImage, price, availableCoupon } = value;

  let discount = getDiscount(price, couponType);
  let resultPrice =
    quantity !== undefined ? (price - discount) * quantity : price - discount;

  return (
    <div>
      <input type="checkbox" checked={checked}  />
      <span>
        <img style={{width: 140, height: 140}} src={coverImage} />
      </span>
      <span>{title}{id}</span>
      <span>
        <select value={quantity}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </span>
      <span>{price}원</span>
      <span>{availableCoupon ? `${discount}원` : "쿠폰 적용 불가"}</span>
      <span>{resultPrice}원</span>
    </div>
  );
};

export default WishedProductItem;
