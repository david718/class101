import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () => (
  <>
    <Title>class101 과제</Title>
    <div>
      <Link
        href={{
          pathname: "products"
        }}
      >
        <a>수업 목록 페이지</a>
      </Link>
    </div>
    <div>
      <Link
        href={{
          pathname: "wishlist"
        }}
      >
        <a>장바구니 페이지</a>
      </Link>
    </div>
  </>
);
