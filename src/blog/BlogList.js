import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as BlogActions from './redux/blogActions';
import BlogListPost from './BlogListPost';
import AddPost from './AddPost';

class BlogList extends Component {
  loadData() {
    this.props.dispatch(BlogActions.query());
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div id="blog-container" className="container-fluid">
        <AddPost />
        <div className="row">
          <div className="col-md-9">
            {this.props.blogQueryResult &&
              this.props.blogQueryResult.posts &&
              this.props.blogQueryResult.posts.map((post, index) => {
                return <BlogListPost key={post._id} post={post} />;
              })}
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    blogQueryResult: state.blog.blogQueryResult
  };
};

BlogList = withRouter(connect(mapStateToProps)(BlogList));

export default BlogList;
