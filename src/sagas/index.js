import { fork } from 'redux-saga/effects';
import mediaStreamSaga from './mediaStream';
import modelSaga from './model';

export default function* rootSaga() {
  yield fork(modelSaga);
  yield fork(mediaStreamSaga);
}
