import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../states/actions";
import { coupons } from "../../assets";

interface Props {
  couponType: "none" | "rate" | "amount";
  onCoupon: any;
}

const ChooseCoupon: React.SFC<Props> = ({ couponType, onCoupon }) => {
  const handleCoupon = (e: any) => {
    onCoupon(e.currentTarget.value);
  };
  const couponList = coupons.map((coupon: any) => (
    <option key={coupon.type} value={coupon.type}>
      {coupon.title}
    </option>
  ));

  return (
    <div>
      <select value={couponType} onChange={handleCoupon}>
        <option value={"none"}>없음</option>
        {couponList}
      </select>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  couponType: state.couponType
});

const mapDispatchToProps = (dispatch: any) => ({
  onCoupon: bindActionCreators(actions.couponChange, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseCoupon);
