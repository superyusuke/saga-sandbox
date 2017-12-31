import { delay } from 'redux-saga'
import { put, call, takeEvery, all } from 'redux-saga/effects'
import fetch from 'cross-fetch';

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* doFetch() {
  const data = yield call(fetch, 'https://www.reddit.com/r/politics.json');
  yield put({ type: 'FETCH_SUCCEEDED', data })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* watchFetch() {
  yield takeEvery('DO_FETCH', doFetch)
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    watchFetch()
  ])
}
