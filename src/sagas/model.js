import { call, put, takeEvery } from 'redux-saga/effects';
import actions from '../actions';


export function* loadModel() {
  try {
    yield call(session.loadModel, 'assets/mobilenet.onnx');
    yield put(actions.loadModel.success());
  } catch(e) {
    yield put(actions.loadModel.failure(e));
  }
}

export function* predictModel({ payload }) {
  try {
    const inputs = new Tensor(new Array(150528).fill(0), 'float32', [1, 3, 224, 224]);
    const output = yield call(session.run, [inputs]);
    yield put(actions.predictModel.success(output));
  } catch(e) {
    yield put(actions.predictModel.failure(e));
  }
}

export default function* flow() {
  yield takeEvery(actions.LOAD_MODEL.REQUEST, loadModel);
  yield takeEvery(actions.PREDICT_MODEL.REQUEST, predictModel);
}
