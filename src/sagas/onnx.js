import { call } from 'redux-saga/effects';
import {Tensor, InferenceSession} from 'onnxjs';


export function* loadModelOnnx() {
  const session = new InferenceSession({backendHint: 'webgl'});
  yield call(session.loadModel, 'assets/mobilenetv2-1.0.onnx');

  const inputs = new Tensor(new Array(150528).fill(0), 'float32', [1, 3, 224, 224]);
  const output = yield call(session.run, [inputs]);
  console.log(output)
}
