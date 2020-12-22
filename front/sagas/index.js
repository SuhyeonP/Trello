import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './user';
<<<<<<< HEAD
import boardSaga from './board';
=======
>>>>>>> master
import { baseUrl } from '../exp/baseUrl';

axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(userSaga),
<<<<<<< HEAD
    fork(boardSaga),
=======
>>>>>>> master
  ]);
}
