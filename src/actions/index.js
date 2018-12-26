import {
  action,
  createRequestTypes,
  REQUEST,
  SUCCESS,
  FAILURE,
} from './utils';

export const GET_MEDIA_STREAM = createRequestTypes('GET_MEDIA_STREAM');
export const LOAD_MODEL = createRequestTypes('LOAD_MODEL');
export const PREDICT_MODEL = createRequestTypes('PREDICT_MODEL');

export const getMediaStream = {
  request: (constraints) => action(GET_MEDIA_STREAM[REQUEST], { payload: constraints }),
  success: (stream) => action(GET_MEDIA_STREAM[SUCCESS], { payload: stream }),
  failure: (error) => action(GET_MEDIA_STREAM[FAILURE], { error }),
};

export const loadModel = {
  request: () => action(LOAD_MODEL[REQUEST]),
  success: () => action(LOAD_MODEL[SUCCESS]),
  failure: (error) => action(LOAD_MODEL[FAILURE], { error }),
};

export const predictModel = {
  request: (data) => action(PREDICT_MODEL[REQUEST], { payload: data }),
  success: (output) => action(PREDICT_MODEL[SUCCESS], { payload: output }),
  failure: (error) => action(PREDICT_MODEL[FAILURE], { error }),
};


export default {
  GET_MEDIA_STREAM,
  getMediaStream,

  LOAD_MODEL,
  loadModel,

  PREDICT_MODEL,
  predictModel,
}
