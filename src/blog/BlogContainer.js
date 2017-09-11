import React from 'react';
import { Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogAdd from './BlogAdd';

//Routing
const BlogContainer = ({ match }) => (
    // here's a nested div
    <div>
        {/* here's a nested Route,
          match.url helps us make a relative path */}
        <Route exact path={match.url} component={BlogList} />
        <Route path={match.url + '/add'} component={BlogAdd} />
    </div>
)

export default BlogContainer;