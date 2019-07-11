import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../states/actions";
import { IProductItemState } from "../../../states/state";
import ProductItem from "./ProductItem";

interface Props {
  page: number;
  productItemArr: Array<IProductItemState>;
  onSelect: any;
}

const SProductList = styled.div`
  width: 1100px;
`;

const ProductItemList: React.SFC<Props> = ({ page, productItemArr, onSelect }) => {
  const productItemTagList = productItemArr.slice(0,5).map(item => {
    return (
      <ProductItem
        key={item.id}
        item={item}
        onSelect={onSelect}
      />
    );
  });
  return (
    <div>
      <h2>수업 목록{page}</h2>
      <SProductList>{productItemTagList}</SProductList>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  page: state.page,
  productItemArr: state.productItemArr
});

const mapDispatchToProps = (dispatch: any) => ({
  onSelect: bindActionCreators(actions.select, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItemList);
