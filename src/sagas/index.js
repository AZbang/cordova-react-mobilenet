import { takeEvery } from 'redux-saga/effects'
import {loadTenserflowModel} from './tf'
import {loadOnnxModel, predictOnnx} from './onnx'

export default function* rootSaga() {
  yield takeEvery('LOAD_ONNX_MODEL', onnx.load);
  yield takeEvery('ONNX_PREDICT', onnx.predict);
  yield takeEvery('ONNX_SET_COMPUTING', onnx.setComputing);

  yield takeEvery('LOAD_TENSERFLOW_MODEL', tf.load);
  yield takeEvery('TF_PREDICT', tf.predict);
  yield takeEvery('TF_SET_COMPUTING', tf.setComputing);
}
