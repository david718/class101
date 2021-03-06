import React from "react";
import { connect } from "react-redux";
import { IProductItemState } from "../../../states/state";
import { coupons } from "../../assets";

interface ICoupon {
  type: string;
  title: string;
  discountRate?: number;
  discountAmount?: number;
}

interface Props {
  couponType: "none" | "rate" | "amount";
  productItemArr: Array<IProductItemState>;
}

const TotalPrice: React.SFC<Props> = ({ couponType, productItemArr }) => {
  const checkedItemArr = productItemArr.map(item => {
    if (item.checked) {
      return item;
    }
  });

  let totalPrice = 0;

  checkedItemArr.forEach(item => {
    if (item !== undefined) {
      const { quantity, value } = item;
      const { price, availableCoupon } = value;

      if (quantity !== undefined) {
        if (availableCoupon !== false) {
          if (couponType === "none") {
            totalPrice += quantity * price;
          } else if (couponType === "rate") {
            coupons.forEach((coupon: ICoupon) => {
              if (coupon.type === couponType) {
                if (coupon.discountRate !== undefined) {
                  totalPrice +=
                    quantity *
                    Math.floor((price * (100 - coupon.discountRate)) / 100);
                }
              }
            });
          } else if (couponType === "amount") {
            coupons.forEach((coupon:ICoupon) => {
              if (coupon.type === couponType) {
                if (coupon.discountAmount !== undefined) {
                  totalPrice += quantity * (price - coupon.discountAmount);
                }
              }
            });
          }
        } else {
          totalPrice += quantity * price;
        }
      }
    }
  });

  if (couponType === "none") {
  } else if (couponType === "rate") {
  } else if (couponType === "amount") {
  }

  return (
    <div>
      <div>총 결제금액: {totalPrice}원</div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  couponType: state.couponType,
  productItemArr: state.productItemArr
});

export default connect(
  mapStateToProps,
  null
)(TotalPrice);
