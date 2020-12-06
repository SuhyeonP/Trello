import produce from 'immer';

export const initialState = {
  mainLists: [],
  loadingBoards: false,
  loadedBoards: false,
  loadBoardError: null,
  addListLoading: false,
  addListDone: false,
  addListError: null,
  modifyTextLoading: false,
  modifyTextDone: false,
  modifyTextError: null,
  addCardLoading: false,
  addCardDone: false,
  addCardError: null,
};

export const LOAD_MAIN_REQUEST = 'LOAD_MAIN_REQUEST';
export const LOAD_MAIN_SUCCESS = 'LOAD_MAIN_SUCCESS';
export const LOAD_MAIN_FAILURE = 'LOAD_MAIN_FAILURE';

export const ADD_LIST_REQUEST = 'ADD_LIST_REQUEST';
export const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS';
export const ADD_LIST_FAILURE = 'ADD_LIST_FAILURE';

export const ADD_CARD_REQUEST = 'ADD_CARD_REQUEST';
export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
export const ADD_CARD_FAILURE = 'ADD_CARD_FAILURE';

export const LOAD_CARDS_REQUEST = 'LOAD_CARDS_REQUEST';
export const LOAD_CARDS_SUCCESS = 'LOAD_CARDS_SUCCESS';
export const LOAD_CARDS_FAILURE = 'LOAD_CARDS_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_MAIN_REQUEST:
      draft.loadingBoards = true;
      draft.loadBoardError = null;
      draft.loadedBoards = false;
      break;
    case LOAD_MAIN_SUCCESS:
      draft.loadingBoards = false;
      draft.mainLists = action.data;
      draft.loadedBoards = true;
      break;
    case LOAD_MAIN_FAILURE:
      draft.loadingBoards = false;
      draft.loadBoardError = action.error;
      break;
    case ADD_LIST_REQUEST:
      draft.addListLoading = true;
      draft.addListError = null;
      draft.logOutDone = false;
      break;
    case ADD_LIST_SUCCESS:
      draft.addListLoading = false;
      draft.addListDone = true;
      draft.mainLists = action.data;
      break;
    case ADD_LIST_FAILURE:
      draft.addListLoading = false;
      draft.addListError = action.error;
      break;
    case ADD_CARD_REQUEST:
      draft.addCardLoading = true;
      draft.addCardError = null;
      draft.signUpDone = false;
      break;
    case ADD_CARD_SUCCESS:
      draft.addCardLoading = false;
      draft.addCardDone = true;
      draft.mainLists = action.data;
      break;
    case ADD_CARD_FAILURE:
      draft.addCardLoading = false;
      draft.addCardError = action.error;
      break;
    default:
      break;
  }
});

export default reducer;
