import React from "react";
import { connect } from "react-redux";
import { IProductItemState } from "../../../states/state";

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
            totalPrice +=
              quantity * (Math.floor(price * 0.9));
          } else if (couponType === "amount") {
            totalPrice += quantity * (price - 10000);
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
