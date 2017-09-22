import './index.css';
import './blog/blog.css';
import './main/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoadingSpinner from './components/LoadingSpinner';
import CrudView from './crud/CrudView';
import BlogContainer from './blog/BlogContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './main/Main';
import Portfolio from './main/Portfolio';
import Contact from './main/Contact';
import Login from './account/Login';
import Signup from './account/Signup';

//import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store';

export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <NavBar />
        <LoadingSpinner />

        <Route exact path="/" component={Main} />
        <Route path="/blog" component={BlogContainer} />
        <Route exact path="/crud" component={CrudView} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
//registerServiceWorker();
