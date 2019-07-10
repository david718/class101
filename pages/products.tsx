import React from "react";
import Link from "next/link";

const products = () => {
  return (
    <div>
      <div>여기 상품 목록</div>
      <Link href="wishlist">
        <a>
          <button>장바구니로 이동</button>
        </a>
      </Link>
    </div>
  );
};

export default products;
