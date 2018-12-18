import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './sw';

import App from './containers/App';
import store from './store';
import './assets/theme.css';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
document.getElementById('root'));

registerServiceWorker();
