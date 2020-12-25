/** @format */

import createReducer from "./createReducer";

export const initialState = {
  mainLists: [],
  loadingBoards: false,
  loadedBoards: false,
  loadBoardError: null,
  loadingCard: false,
  loadedCard: false,
  loadCardError: null,
  addListLoading: false,
  addListDone: false,
  addListError: null,
  modifyTextLoading: false,
  modifyTextDone: false,
  modifyTextError: null,
  addCardLoading: false,
  addCardDone: false,
  addCardError: null,
  cardModal: null,
  deleteCardLoading: false,
  deleteCardDone: false,
  deleteCardError: null,
};

export const LOAD_MAIN_REQUEST = "LOAD_MAIN_REQUEST";
export const LOAD_MAIN_SUCCESS = "LOAD_MAIN_SUCCESS";
export const LOAD_MAIN_FAILURE = "LOAD_MAIN_FAILURE";

export const LOAD_CARD_REQUEST = "LOAD_CARD_REQUEST";
export const LOAD_CARD_SUCCESS = "LOAD_CARD_SUCCESS";
export const LOAD_CARD_FAILURE = "LOAD_CARD_FAILURE";

export const ADD_LIST_REQUEST = "ADD_LIST_REQUEST";
export const ADD_LIST_SUCCESS = "ADD_LIST_SUCCESS";
export const ADD_LIST_FAILURE = "ADD_LIST_FAILURE";

export const ADD_CARD_REQUEST = "ADD_CARD_REQUEST";
export const ADD_CARD_SUCCESS = "ADD_CARD_SUCCESS";
export const ADD_CARD_FAILURE = "ADD_CARD_FAILURE";

export const MODIFY_BOARD_TT_REQUEST = "MODIFY_BOARD_TT_REQUEST";
export const MODIFY_BOARD_TT_SUCCESS = "MODIFY_BOARD_TT_SUCCESS";
export const MODIFY_BOARD_TT_FAILURE = "MODIFY_BOARD_TT_FAILURE";

export const MODIFY_BOARD_REQUEST = "MODIFY_BOARD_REQUEST";
export const MODIFY_BOARD_SUCCESS = "MODIFY_BOARD_SUCCESS";
export const MODIFY_BOARD_FAILURE = "MODIFY_BOARD_FAILURE";

export const MODIFY_LIST_REQUEST = "MODIFY_LIST_REQUEST";
export const MODIFY_LIST_SUCCESS = "MODIFY_LIST_SUCCESS";
export const MODIFY_LIST_FAILURE = "MODIFY_LIST_FAILURE";

export const MODIFY_CARD_REQUEST = "MODIFY_CARD_REQUEST";
export const MODIFY_CARD_SUCCESS = "MODIFY_CARD_SUCCESS";
export const MODIFY_CARD_FAILURE = "MODIFY_CARD_FAILURE";

export const DELETE_CARD_REQUEST = "DELETE_CARD_REQUEST";
export const DELETE_CARD_SUCCESS = "DELETE_CARD_SUCCESS";
export const DELETE_CARD_FAILURE = "DELETE_CARD_FAILURE";

export default createReducer(initialState, {
  [LOAD_MAIN_REQUEST]: (state) => {
    state.loadingBoards = true;
    state.loadBoardError = null;
    state.loadedBoards = false;
  },
  [LOAD_MAIN_SUCCESS]: (state, action) => {
    state.loadingBoards = false;
    state.mainLists = action.data;
    state.loadedBoards = true;
  },
  [LOAD_MAIN_FAILURE]: (state, action) => {
    state.loadingBoards = false;
    state.loadBoardError = action.error;
  },
  [LOAD_CARD_REQUEST]: (state) => {
    state.loadingCard = true;
    state.loadCardError = null;
    state.loadedCard = false;
  },
  [LOAD_CARD_SUCCESS]: (state, action) => {
    state.loadingCard = false;
    state.loadedCard = true;
    state.cardModal = action.data;
  },
  [LOAD_CARD_FAILURE]: (state, action) => {
    state.loadingCard = false;
    state.loadCardError = action.error;
  },
  [ADD_LIST_REQUEST]: (state) => {
    state.addListLoading = true;
    state.addListError = null;
    state.logOutDone = false;
  },
  [ADD_LIST_SUCCESS]: (state, action) => {
    state.addListLoading = false;
    state.addListDone = true;
    state.mainLists = action.data;
  },
  [ADD_LIST_FAILURE]: (state, action) => {
    state.addListLoading = false;
    state.addListError = action.error;
  },
  [ADD_CARD_REQUEST]: (state) => {
    state.addCardLoading = true;
    state.addCardError = null;
    state.addCardDone = false;
  },
  [ADD_CARD_SUCCESS]: (state, action) => {
    state.addCardLoading = false;
    state.addCardDone = true;
    state.mainLists = action.data;
  },
  [ADD_CARD_FAILURE]: (state, action) => {
    state.addCardLoading = false;
    state.addCardError = action.error;
  },
  [MODIFY_BOARD_TT_REQUEST]: (state) => {
    state.modifyTextLoading = true;
    state.modifyTextError = null;
  },
  [MODIFY_BOARD_REQUEST]: (state) => {
    state.modifyTextLoading = true;
    state.modifyTextError = null;
  },
  [MODIFY_LIST_REQUEST]: (state) => {
    state.modifyTextLoading = true;
    state.modifyTextError = null;
  },
  [MODIFY_CARD_REQUEST]: (state) => {
    state.modifyTextLoading = true;
    state.modifyTextError = null;
  },
  [MODIFY_BOARD_TT_SUCCESS]: (state, action) => {
    state.modifyTextDone = true;
    state.modifyTextLoading = false;
    state.mainLists = action.data;
  },
  [MODIFY_BOARD_SUCCESS]: (state, action) => {
    state.modifyTextDone = true;
    state.modifyTextLoading = false;
    state.mainLists = action.data;
  },
  [MODIFY_LIST_SUCCESS]: (state) => {
    state.modifyTextDone = true;
    state.modifyTextLoading = false;
  },
  [MODIFY_CARD_SUCCESS]: (state) => {
    state.modifyTextDone = true;
    state.modifyTextLoading = false;
  },
  [MODIFY_BOARD_TT_FAILURE]: (state, action) => {
    state.modifyTextDone = false;
    state.modifyTextError = action.error;
  },
  [MODIFY_BOARD_FAILURE]: (state, action) => {
    state.modifyTextDone = false;
    state.modifyTextError = action.error;
  },
  [MODIFY_LIST_FAILURE]: (state, action) => {
    state.modifyTextDone = false;
    state.modifyTextError = action.error;
  },
  [MODIFY_CARD_FAILURE]: (state, action) => {
    state.modifyTextDone = false;
    state.modifyTextError = action.error;
  },
  [DELETE_CARD_REQUEST]: (state) => {
    state.deleteCardLoading = true;
    state.deleteCardError = null;
  },
  [DELETE_CARD_SUCCESS]: (state) => {
    state.deleteCardLoading = false;
    state.deleteCardDone = true;
  },
  [DELETE_CARD_FAILURE]: (state, action) => {
    state.deleteCardLoading = false;
    state.deleteCardError = action.error;
  },
});
