import { combineReducers } from 'redux'

import ui from './ui'
import model from './model'

export default (history) => combineReducers({
  model, ui
});
