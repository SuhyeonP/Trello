import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  ADD_CARD_FAILURE,
  ADD_CARD_REQUEST,
  ADD_CARD_SUCCESS,
  ADD_LIST_FAILURE,
  ADD_LIST_REQUEST,
  ADD_LIST_SUCCESS,
  LOAD_CARD_FAILURE,
  LOAD_CARD_REQUEST,
  LOAD_CARD_SUCCESS,
  LOAD_MAIN_FAILURE,
  LOAD_MAIN_REQUEST,
  LOAD_MAIN_SUCCESS,
  MODIFY_BOARD_FAILURE,
  MODIFY_BOARD_REQUEST,
  MODIFY_BOARD_SUCCESS,
  MODIFY_BOARD_TT_FAILURE,
  MODIFY_BOARD_TT_REQUEST,
  MODIFY_BOARD_TT_SUCCESS,

} from '../reducers/board';

const dummyCards = [
  { cardListId: 1, cardName: 'test1', order: 1, background: '#fffff3', createdAt: '2020.10.21', updatedAt: null },
];

const dummyCard = [
  { cardName: 'test1', content: 'test', background: '#fffff3', todoList: [] },
];

const dummyLists = [
  { listId: 1, boardId: 1, createdAt: '2020.10.21', updatedAt: null },
];// this is board table i need

function loadMainLists() {
  return axios.get('/board');
}

function* loadMain() {
  try {
    const result = yield call(loadMainLists);
    yield put({
      type: LOAD_MAIN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MAIN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadMain() {
  yield takeLatest(LOAD_MAIN_REQUEST, loadMain);
}

function loadModalInCard(data) {
  return axios.get('/list/card', data);
}
function* loadModal(action) {
  try {
    // const result = yield call(loadModalInCard, action.data);
    yield delay(1000);
    yield put({
      type: LOAD_CARD_SUCCESS,
      data: dummyCard,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_CARD_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadModal() {
  yield takeLatest(LOAD_CARD_REQUEST, loadModal);
}

function addListRequest(data) {
  return axios.post('/list', data);
}

function* addList(action) {
  try {
    const result = yield call(addListRequest, action.data);
    yield put({
      type: ADD_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddList() {
  yield takeLatest(ADD_LIST_REQUEST, addList);
}

function addCardRequest(data) {
  return axios.post('/list', data);
}

function* addCard(action) {
  try {
    // const result=yield call(addCardRequest,action.data)
    yield delay(1000);
    yield put({
      type: ADD_CARD_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_CARD_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddCard() {
  yield takeLatest(ADD_CARD_REQUEST, addCard);
}

function setBoardTTAPI(data) {
  return axios.patch('/board/title', data);
}

function* setBoardTitle(action) {
  try {
    const result = yield call(setBoardTTAPI, action.data);
    yield put({
      type: MODIFY_BOARD_TT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MODIFY_BOARD_TT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchBoardTT() {
  yield takeLatest(MODIFY_BOARD_TT_REQUEST, setBoardTitle);
}

function setBoardBGAPI(data) {
  return axios.patch('/board/background', data);
}

function* setBoardBackground(action) {
  try {
    const result = yield call(setBoardBGAPI, action.data);
    yield put({
      type: MODIFY_BOARD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MODIFY_BOARD_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchBackgroundBoard() {
  yield takeLatest(MODIFY_BOARD_REQUEST, setBoardBackground);
}

export default function* userSaga() {
  yield all([
    fork(watchLoadMain),
    fork(watchLoadModal),
    fork(watchAddList),
    fork(watchAddCard),
    fork(watchBoardTT),
    fork(watchBackgroundBoard),
  ]);
}
