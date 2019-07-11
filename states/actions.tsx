import * as types from "./actionTypes";

export const updateAnnouncement = (message: string) => (dispatch: any) => {
  return dispatch({ type: types.UPDATE_ANNOUNCEMENT, message });
};

export const pageChange = (page: number) => (dispatch: any) => {
  return dispatch({ type: types.PAGE_CHANGE, page });
};

export const select = (id: string) => (dispatch: any) => {
  return dispatch({ type: types.ITEM_SELECT, id });
}