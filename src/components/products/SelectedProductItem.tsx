import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  coverImage: string;
}

const ProductImage = styled.img`
  @media (max-width: 992px) {
    width: 160px;
    height: 160px;
    margin-right: 8px;
  }
  width: 140px;
  height: 140px;
  border-radius: 6px;
  margin-bottom: 8px;
`;

const StyledProduct = styled.div`
  margin-bottom: 24px;
`;

const SelectedProductItem: React.SFC<Props> = ({ title, coverImage }) => {
  return (
    <StyledProduct>
      <ProductImage src={coverImage} />
      <div>{title}</div>
    </StyledProduct>
  );
};

export default SelectedProductItem;
