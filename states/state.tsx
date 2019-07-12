export interface IProductItem {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
  availableCoupon?: undefined | boolean;
}

export interface IProductItemState {
  id: string;
  selected: boolean;
  checked: boolean;
  quantity: number | undefined;
  value: IProductItem;
}

export interface IState {
  page: number;
  productItemArr: Array<IProductItemState> | void[];
  seletedArr: Array<string>;
  checkedArr: Array<{id: string, quantity: number}>;
  couponType: "none" | "rate" | "amount";
}
