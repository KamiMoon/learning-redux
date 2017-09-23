import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
//import "summernote/dist/summernote.css";
import './index.css';
import './blog/blog.css';
import './main/main.css';

import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';
//import "summernote/dist/summernote.js";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

//import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store';

export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
//registerServiceWorker();
