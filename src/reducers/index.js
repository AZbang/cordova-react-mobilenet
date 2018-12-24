import { combineReducers } from 'redux';
import mediaStream from './mediaStream';
import model from './model';

export default () => combineReducers({
  mediaStream, model
});
