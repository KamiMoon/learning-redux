import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import './index.css';
import CrudContainer from './crud/CrudContainer';
import BlogContainer from './blog/BlogContainer';
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
                </ul>

                <Route exact path="/" component={CrudContainer} />
                <Route path="/blog" component={BlogContainer} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
//registerServiceWorker();
