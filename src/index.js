import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './shared/fonts.css';
import './shared/index.css';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

// Reload app in-browser without refreshing page
if (module.hot) {
  module.hot.accept();
}