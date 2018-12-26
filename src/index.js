import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './sw';

import App from './containers/App';
import store from './store';
import './assets/theme.css';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
  document.getElementById('root'));
}

registerServiceWorker();

if(window.cordova)
  document.addEventListener("deviceready", render, false);
else render();
