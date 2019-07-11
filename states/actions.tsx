import * as types from "./actionTypes";

export const pageChange = (page: number) => (dispatch: any) => {
  return dispatch({ type: types.PAGE_CHANGE, page });
};

export const select = (id: string) => (dispatch: any) => {
  return dispatch({ type: types.ITEM_SELECT, id });
};

export const check = (id: string) => (dispatch: any) => {
  return dispatch({ type: types.ITEM_CHECK, id });
};

export const quantityChange = (id: string, quantityValue: undefined|number) => (dispatch: any) => {
  return dispatch({ type: types.ITEM_QUANTITY_CHANGE, id, quantityValue });
};
