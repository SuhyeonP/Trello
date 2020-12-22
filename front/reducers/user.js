import produce from 'immer';
<<<<<<< HEAD
import { createReducer } from '@reduxjs/toolkit';
=======
>>>>>>> master

export const initialState = {
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  me: null,
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const RELOAD_USER_REQUEST = 'RELOAD_USER_REQUEST';
export const RELOAD_USER_SUCCESS = 'RELOAD_USER_SUCCESS';
export const RELOAD_USER_FAILURE = 'RELOAD_USER_FAILURE';

<<<<<<< HEAD
export default createReducer(initialState, {
  [LOG_IN_REQUEST]: (state) => produce(state, (draft) => {
    draft.logInLoading = true;
    draft.logInError = null;
    draft.logInDone = false;
  }),
  [LOG_IN_SUCCESS]: (state, action) => produce(state, (draft) => {
    draft.logInLoading = false;
    draft.me = action.data;
    draft.logInDone = true;
  }),
  [LOG_IN_FAILURE]: (state, action) => produce(state, (draft) => {
    draft.logInLoading = false;
    draft.logInError = action.error;
  }),
  [LOG_OUT_REQUEST]: (state) => produce(state, (draft) => {
    draft.logOutLoading = true;
    draft.logOutError = null;
    draft.logOutDone = false;
  }),
  [LOG_OUT_SUCCESS]: (state) => produce(state, (draft) => {
    draft.logOutLoading = false;
    draft.logOutDone = true;
    draft.me = null;
  }),
  [LOG_OUT_FAILURE]: (state, action) => produce(state, (draft) => {
    draft.logOutLoading = false;
    draft.logOutError = action.error;
  }),
  [RELOAD_USER_REQUEST]: (state) => produce(state, (draft) => {
    draft.loadUserLoading = true;
    draft.loadUserError = null;
    draft.loadUserDone = false;
  }),
  [RELOAD_USER_SUCCESS]: (state, action) => produce(state, (draft) => {
    draft.loadUserLoading = false;
    draft.me = action.data;
    draft.loadUserDone = true;
  }),
  [RELOAD_USER_FAILURE]: (state, action) => produce(state, (draft) => {
    draft.loadUserLoading = false;
    draft.loadUserError = action.error;
  }),
  [SIGN_UP_REQUEST]: (state) => produce(state, (draft) => {
    draft.signUpLoading = true;
    draft.signUpError = null;
    draft.signUpDone = false;
  }),
  [SIGN_UP_SUCCESS]: (state) => produce(state, (draft) => {
    draft.signUpLoading = false;
    draft.signUpDone = true;
  }),
  [SIGN_UP_FAILURE]: (state, action) => produce(state, (draft) => {
    draft.signUpLoading = false;
    draft.signUpError = action.error;
  }),
});
=======
const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;
    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.me = action.data;
      draft.logInDone = true;
      break;
    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;
    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;
    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;
    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;
    case RELOAD_USER_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserError = null;
      draft.loadUserDone = false;
      break;
    case RELOAD_USER_SUCCESS:
      draft.loadUserLoading = false;
      draft.me = action.data;
      draft.loadUserDone = true;
      break;
    case RELOAD_USER_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;
    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;
    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;
    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;
    default:
      break;
  }
});

export default reducer;
>>>>>>> master
