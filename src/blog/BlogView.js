import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as BlogActions from './redux/blogActions';

import PostKeywords from './PostKeywords';
import AddPost from './AddPost';
import Post from './Post';

class BlogView extends Component {
  loadData() {
    console.log('Blog View');

    const id = this.props.match.params.id;
    this.props.dispatch(BlogActions.get(id));
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div id="blog-container" className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <Link to="/blog" className="btn btn-default btn-lg" role="button">
              {' '}
              ← Back to Blog
            </Link>
            <br />
            <div>
              <br />
              {/* <a href="/blog/edit/{{vm.post._id}}" className="btn btn-default btn-lg" role="button">Edit</a> */}
              <br />
              <br />
              {/* <a ng-click="vm.delete(vm.post._id)" className="btn btn-default btn-lg" role="button">Delete</a> */}
              <br />
              <br />
              {/* <a ng-click="vm.publishToMailingList(vm.post._id)" className="btn btn-default btn-lg" role="button">Publish to Mailing List</a> */}
              <br />
            </div>
            <br />

            {this.props.post && <Post post={this.props.post} />}

            {/* <blog-post post="vm.post" ng-if="vm.contentLoaded"></blog-post>
                        <dir-disqus disqus-shortname="{{CONSTANTS.DISQUS.SHORTNAME}}" disqus-identifier="{{vm.post._id}}" disqus-url="http://www.erickizaki.com/blog/{{vm.post._id}}" disqus-title="{{vm.post.title}}" ready-to-bind="{{vm.contentLoaded}}">
                        </dir-disqus> */}
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.blog.post
  };
};

BlogView = withRouter(connect(mapStateToProps)(BlogView));

export default BlogView;
