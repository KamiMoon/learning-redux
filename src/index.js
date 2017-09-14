import './index.css';


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import LoadingSpinner from './components/LoadingSpinner';
import CrudView from './crud/CrudView';
import BlogContainer from './blog/BlogContainer';
import Login from './account/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store';

export const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <NavBar />
                <LoadingSpinner />

                <Route exact path="/" component={CrudView} />
                <Route path="/blog" component={BlogContainer} />
                <Route path="/login" component={Login} />

                <Footer />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
//registerServiceWorker();

