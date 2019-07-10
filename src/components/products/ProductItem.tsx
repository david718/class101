import React from "react";
import styled from "styled-components";

const StyledProduct = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

const ProductImage = styled.div`
  @media (max-width: 992px) {
    width: 160px;
    height: 160px;
    margin-right: 8px;
  }
  width: 240px;
  height: 240px;
  background-size: contain;
  border-radius: 6px;
  margin-bottom: 8px;
  margin-right: 10px;
`;

interface Props {
  title: string;
  coverImage: string;
  price: number;
}

const ProductItem: React.SFC<Props> = ({ title, coverImage, price }) => {
  return (
    <StyledProduct>
      <ProductImage style={{ backgroundImage: `url("${coverImage}")` }} />
      <div>{title}</div>
      <div>{price}원</div>
    </StyledProduct>
  );
};

export default ProductItem;
