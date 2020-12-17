import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS, RELOAD_USER_FAILURE,
  RELOAD_USER_REQUEST, RELOAD_USER_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../reducers/user';

function logInAPI(data) {
  return axios.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    console.log(result.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/user/logout');
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post('/user/signup', data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}
function loadUserAPI() {
  return axios.get('/user');
}

function* loadUser() {
  try {
    const result = yield call(loadUserAPI);
    yield put({
      type: RELOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RELOAD_USER_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchReloadUser() {
  yield takeLatest(RELOAD_USER_REQUEST, loadUser);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchReloadUser),
  ]);
}
