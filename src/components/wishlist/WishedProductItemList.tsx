import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../states/actions";
import { IProductItemState } from "../../../states/state";
import WishedProductItem from "./WishedProductItem";

interface Props {
  productItemArr: Array<IProductItemState>;
  couponType: "none" | "rate" | "amount";
  onQuantity: any;
}

const WishedProductItemList: React.SFC<Props> = ({
  productItemArr,
  couponType
}) => {
  const selectedProductItemArr = productItemArr.filter(
    productItem => productItem.selected
  );
  const wishedProductItemTagList = selectedProductItemArr.map(item => {
    return (
      <WishedProductItem key={item.id} item={item} couponType={couponType} />
    );
  });
  return (
    <div>
      <h2>장바구니 상품 목록</h2>
      <div>{wishedProductItemTagList}</div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  productItemArr: state.productItemArr,
  couponType: state.couponType
});

const mapDispatchToProps = (dispatch: any) => ({
  onQuantity: bindActionCreators(actions.quantityChange, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishedProductItemList);
