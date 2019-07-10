import React from "react";
import Link from "next/link";
import ProductItemList from '../src/components/products/ProductItemList'

import data from '../src/assets/productItems'

const products = () => {
  return (
    <div>
      <ProductItemList productItemArr={data} />
      <Link href="wishlist">
        <a>
          <button>장바구니로 이동</button>
        </a>
      </Link>
    </div>
  );
};

export default products;
