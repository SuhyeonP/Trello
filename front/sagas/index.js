import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './user';
import boardSaga from './board';

axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(boardSaga),
  ]);
}
