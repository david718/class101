import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { IProductItemState } from "../../../states/state";
import SelectedProductItem from "./SelectedProductItem";

interface Props {
  productItemArr: Array<IProductItemState>;
}

const SelectedProductItemList: React.SFC<Props> = ({ productItemArr }) => {
  const selectedProductItemTagList = productItemArr.map(productItem => {
    const { title, coverImage } = productItem.value;
    if (productItem.selected) {
      return <SelectedProductItem key={productItem.id} title={title} coverImage={coverImage} />;
    }
  });
  return (
    <div>
      <h3>장바구니 목록</h3>
      <div>{selectedProductItemTagList}</div>
      <div>
        <Link href="wishlist">
          <a>
            <button>장바구니로 이동</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  productItemArr: state.productItemArr
});

export default connect(
  mapStateToProps,
  null
)(SelectedProductItemList);
