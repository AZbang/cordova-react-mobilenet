import { call, put } from 'redux-saga/effects';
import {Tensor, InferenceSession} from 'onnxjs';


export function* loadModelOnnx() {
  try {
    const session = new InferenceSession({backendHint: 'webgl'});
    yield call(session.loadModel, 'assets/mobilenetv2-1.0.onnx');
    yield put(action.loadModelOnnx.success());
  } catch(e) {
    yield put(action.loadModelOnnx.failure(e));
  }
}

export function* predictModelOnnx(data) {
  try {
    const inputs = new Tensor(new Array(150528).fill(0), 'float32', [1, 3, 224, 224]);
    const output = yield call(session.run, [inputs]);
    yield put(action.predictModelOnnx.success(output));
  } catch(e) {
    yield put(action.predictModelOnnx.failure(e));
  }
}

export default function* flow() {
  takeEvery(action.LOAD_MODEL_ONNX.REQUEST, loadModelOnnx);
  takeEvery(action.PREDICT_MODEL_ONNX.REQUEST, predictModel);
}
