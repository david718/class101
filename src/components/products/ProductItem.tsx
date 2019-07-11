import React from "react";
import styled from "styled-components";

import { IProductItemState } from "../../../states/state";

const SProduct = styled.div`
  float: left;
  width: 200px;
  margin-left: 15px;
`;

const ProductImage = styled.img`
  @media (max-width: 992px) {
    width: 160px;
    height: 160px;
    margin-right: 8px;
  }
  width: 190px;
  height: 190px;
  border-radius: 6px;
  margin-bottom: 8px;
`;

interface Props {
  item: IProductItemState;
  onSelect: any;
  limit: number;
}

const ProductItem: React.SFC<Props> = ({ item, onSelect, limit }) => {
  const { id, selected, value } = item;
  const { coverImage, title, price } = value;

  console.log(limit);
  const handleClick = (e: any) => {
    if (limit < 3) {
      onSelect(id);
    } else {
      if (selected) {
        onSelect(id);
      } else {
        e.preventDefault();
        alert("장바구니가 꽉찼습니다");
      }
    }
  };

  return (
    <SProduct>
      <ProductImage src={coverImage} />
      <div>{title}</div>
      <div>{price}원</div>
      <button onClick={(e: any) => handleClick(e)}>
        {selected ? "빼기" : "담기"}
      </button>
    </SProduct>
  );
};

export default ProductItem;
