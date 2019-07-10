import React from "react";
import ProductItem from "./ProductItem";

interface Props {
  productItemArr: Array<{
    id: string;
    title: string;
    coverImage: string;
    price: number;
    score: number;
  }>;
}

const ProductItemList: React.SFC<Props> = ({ productItemArr }) => {
  const productItemTagList = productItemArr.map(item => {
    const { id, title, coverImage, price } = item;

    return <ProductItem key={id} title={title} coverImage={coverImage} price={price} />;
  });
  return (
    <div>
      <div>수업 목록</div>
      {productItemTagList}
    </div>
  );
};

export default ProductItemList;
