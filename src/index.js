import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import registerServiceWorker from './sw';
import App from './components/App';
import stores from './stores';
import './assets/theme.css';

// For easier debugging
window._____APP_STATE_____ = stores;
registerServiceWorker();

const render = () => {
  ReactDOM.render((
    <Provider {...stores}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  ), document.getElementById('root'));
}

if(window.cordova)
  document.addEventListener("deviceready", render, false);
else render();
