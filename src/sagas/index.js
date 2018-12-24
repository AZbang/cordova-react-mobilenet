import { fork } from 'redux-saga/effects';
import mediaStreamSaga from './mediaStream';
import onnxSaga from './onnx';

export default function* rootSaga() {
  yield fork(onnxSaga);
  yield fork(mediaStreamSaga);
}
