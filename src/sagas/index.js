import { fetchAllMovies } from './api';
import { call, put } from 'redux-saga/effects';
import { FETCH_MOVIES_REQUESTED, MOVIES_FETCHED, ERROR_OCCURED } from '../actions/constants';

import { takeEvery } from 'redux-saga/effects';

function * getAllMovies () {
    try {
      const products = yield call(fetchAllMovies);
      yield put({ type: MOVIES_FETCHED, payload: products });
    } catch (e) {
      yield put({ type: ERROR_OCCURED, payload: e.message });
    }
}
  
function* sagaMiddleWare() {
  yield takeEvery(FETCH_MOVIES_REQUESTED, getAllMovies);
}

export default sagaMiddleWare;

