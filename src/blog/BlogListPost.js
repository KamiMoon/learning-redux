import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostKeywords from './PostKeywords';

export default class BlogListPost extends Component {
  render() {
    const post = this.props.post;

    return (
      <article>
        {post && (
          <div className="media">
            <div className="media-left">
              <Link to={`/blog/view/${post._id}`}>
                <img alt="todo" />
              </Link>
              {/* <b-img public-id="this.props..photo}" transformation="w_150,h_150,c_fit" alt="this.props..title}" className="media-object"></b-img> */}
            </div>
            <div className="media-body">
              <Link
                to={`/blog/view/${post._id}`}
                className="media-heading post-preview-title"
              >
                {post.title}
              </Link>
              <ul className="blog-meta-list">
                {post.user_name && (
                  <li
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <span
                      className="glyphicon glyphicon-user"
                      aria-hidden="true"
                    />{' '}
                    By <span itemProp="name">{post.user_name}</span>
                  </li>
                )}

                <li id="datePublished" className="date">
                  <meta itemProp="datePublished" content={post.createdAt} />
                  <meta itemProp="dateModified" content={post.updatedAt} />
                  <span
                    className="glyphicon glyphicon-time"
                    aria-hidden="true"
                  />
                  {post.createdAt}
                </li>
                <li className="comments" property="discussionUrl">
                  <Link
                    to={`/blog/view/${post._id}`}
                    className="btn btn-primary"
                    type="button"
                  >
                    Comments
                  </Link>
                </li>
                {/* <li className="tags" property="keywords" ng-if="post.keywords.length">
                            <span className="glyphicon glyphicon-bookmark" aria-hidden="true"></span>
                            <a ng-repeat="keyword in post.keywords" ng-className="{'active': vm.searchParams['keywords.text'] === keyword.text}" className="btn btn-default btn-sm keywords" href="/blogKeyword
                            /{keyword.text}">{keyword.text}</a>
                    </li> */}

                {post.keywords.length && (
                  <PostKeywords keywords={post.keywords} searchParams={{}} />
                )}
              </ul>
              <p className="post-preview-html">{post.headingQuote}</p>
            </div>
          </div>
        )}
      </article>
    );
  }
}
