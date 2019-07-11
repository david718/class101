import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../states/actions";

interface Props {
  couponType: "none" | "rate" | "amount";
  onCoupon: any;
}

const ChooseCoupon:React.SFC<Props> = ({couponType, onCoupon}) => {
  const handleCoupon = (e:any) => {
    onCoupon(e.currentTarget.value)
  }
  return (
    <div>
      <select value={couponType} onChange={handleCoupon}>
        <option value={'none'}>없음</option>
        <option value={'amount'}>10,000원</option>
        <option value={'rate'}>10%</option>
      </select>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  couponType: state.couponType
});

const mapDispatchToProps = (dispatch: any) => ({
  onCoupon: bindActionCreators(actions.couponChange, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseCoupon);
