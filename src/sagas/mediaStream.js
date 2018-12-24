import { call, put, takeEvery } from 'redux-saga/effects';
import action from '../actions';

export function* getMediaStream(constraints) {
  try {
    const stream = yield call(navigator.mediaDevices.getUserMedia, constraints);
    yield put(action.getMediaStream.success(stream));
  } catch(e) {
    yield put(action.getMediaStream.failure(e));
  }
}

export default function* flow() {
  takeEvery(action.GET_MEDIA_STREAM.REQUEST, getMediaStream);
}
