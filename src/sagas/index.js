import { takeEvery } from 'redux-saga/effects'
import { loadModelTF } from './tf'
import { loadModelOnnx } from './onnx'

export default function* rootSaga() {
  yield takeEvery('LOAD_ONNX_MODEL', loadModelOnnx);
  // yield takeEvery('ONNX_PREDICT', onnx.predict);
  // yield takeEvery('ONNX_SET_COMPUTING', onnx.setComputing);

  yield takeEvery('LOAD_TENSERFLOW_MODEL', loadModelTF);
  // yield takeEvery('TF_PREDICT', tf.predict);
  // yield takeEvery('TF_SET_COMPUTING', tf.setComputing);
}
