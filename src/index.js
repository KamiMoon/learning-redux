import './index.css';


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


import CrudContainer from './crud/CrudContainer';
import BlogContainer from './blog/BlogContainer';
import Login from './account/Login';
//import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>

                <Route exact path="/" component={CrudContainer} />
                <Route path="/blog" component={BlogContainer} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
//registerServiceWorker();
