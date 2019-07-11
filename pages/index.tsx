import React from "react";
import Link from "next/link";
import { NextPage } from "next";

const index: NextPage<{}> = ({}) => {
  return (
    <>
      <h1>class101 과제</h1>
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
};

export default index;
