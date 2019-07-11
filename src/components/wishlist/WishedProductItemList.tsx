import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../states/actions";
import { IProductItemState } from "../../../states/state";
import WishedProductItem from "./WishedProductItem";

interface Props {
  productItemArr: Array<IProductItemState>;
  couponType: "none" | "rate" | "amount";
  onCheck: any;
  onQuantity: any;
}

const WishedProductItemList: React.SFC<Props> = ({
  productItemArr,
  couponType,
  onCheck,
  onQuantity
}) => {
  const selectedProductItemArr = productItemArr.filter(
    productItem => productItem.selected
  );
  const wishedProductItemTagList = selectedProductItemArr.map(item => {
    return (
      <WishedProductItem
        key={item.id}
        item={item}
        onCheck={onCheck}
        onQuantity={onQuantity}
        couponType={couponType}
      />
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
  onCheck: bindActionCreators(actions.check, dispatch),
  onQuantity: bindActionCreators(actions.quantityChange, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishedProductItemList);
