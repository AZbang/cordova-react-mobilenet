import { call } from 'redux-saga/effects';
import * as tf from '@tensorflow/tfjs';

export function* loadModelTF({ img }) {
  const model = yield call(tf.loadModel, 'assets/model.json');

  const example = tf.fromPixels(img);
  const preprocessedInput = tf.div(tf.sub(example.asType('float32'), tf.scalar(255 / 2)), tf.scalar(255 / 2));
  const reshapedInput = preprocessedInput.reshape([1, ...preprocessedInput.shape]);

  const prediction = yield call(model.predict, reshapedInput);
  const data = yield call(prediction.data);
  console.log(data);
}
