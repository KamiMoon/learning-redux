import React from 'react';
import { Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogAdd from './BlogAdd';
import BlogView from './BlogView';

//Routing
const BlogContainer = ({ match }) => (
    // here's a nested div
    <div>
        {/* here's a nested Route,
          match.url helps us make a relative path */}
        <Route exact path={match.url} component={BlogList} />
        <Route path={match.url + '/add'} component={BlogAdd} />
        <Route path={match.url + '/view/:id'} component={BlogView} />
    </div>
)

export default BlogContainer;