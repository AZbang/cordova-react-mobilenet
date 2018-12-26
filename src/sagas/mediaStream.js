import { call, put, takeEvery } from 'redux-saga/effects';
import actions from '../actions';

export function* getMediaStream({ payload }) {
  try {

  } catch(e) {
    yield put(actions.getMediaStream.failure(e));
  }
}

export default function* flow() {
  yield takeEvery(actions.GET_MEDIA_STREAM.REQUEST, getMediaStream);
}
