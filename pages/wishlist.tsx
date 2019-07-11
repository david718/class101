import React from "react";
import Link from "next/link";
import {
  Header,
  WishedProductItemList,
  TotalPrice,
  ChooseCoupon
} from "../src/components/wishlist";

const wishlist = () => {
  return (
    <div>
      <Header />
      <WishedProductItemList />
      <ChooseCoupon />
      <TotalPrice />
      <div>여기 장바구니</div>
      <Link href="products">
        <a>
          <button>수업 추가로 선택하기</button>
        </a>
      </Link>
    </div>
  );
};

export default wishlist;
