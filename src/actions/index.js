import {
  action,
  createRequestTypes,
  REQUEST,
  SUCCESS,
  FAILURE,
} from './utils';

export const GET_MEDIA_STREAM = createRequestTypes('GET_MEDIA_STREAM');
export const LOAD_MODEL_ONNX = createRequestTypes('LOAD_MODEL_ONNX');
export const PREDICT_MODEL_ONNX = createRequestTypes('PREDICT_MODEL_ONNX');

export const getMediaStream = {
  request: (constraints) => action(GET_MEDIA_STREAM[REQUEST], { constraints }),
  success: (stream) => action(GET_MEDIA_STREAM[SUCCESS], { stream }),
  failure: (error) => action(GET_MEDIA_STREAM[FAILURE], { error }),
};

export const loadModelOnnx = {
  request: () => action(LOAD_MODEL_ONNX[REQUEST]),
  success: () => action(LOAD_MODEL_ONNX[SUCCESS]),
  failure: (error) => action(LOAD_MODEL_ONNX[FAILURE], { error }),
};

export const predictModelOnnx = {
  request: (data) => action(PREDICT_MODEL_ONNX[REQUEST], { data }),
  success: (output) => action(PREDICT_MODEL_ONNX[SUCCESS], { output }),
  failure: (error) => action(PREDICT_MODEL_ONNX[FAILURE], { error }),
};
