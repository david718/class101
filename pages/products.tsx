import React from "react";
import ProductItemList from "../src/components/products/ProductItemList";
import SelectedProductItemList from "../src/components/products/SelectedProductItemList";

const products = () => {
  return (
    <div>
      <ProductItemList />
      <SelectedProductItemList />
    </div>
  );
};

export default products;
