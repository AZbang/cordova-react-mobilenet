import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ui from './ui'
import model from './model'

export default (history) => combineReducers({
  router: connectRouter(history),
  model, ui
});
