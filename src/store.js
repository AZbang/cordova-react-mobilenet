import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createHashHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from './reducers'
import rootSaga from './sagas'

const history = createHashHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  createRootReducer(history),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ),
  ),
);
sagaMiddleware.run(rootSaga);

export {store, history};
