import React from 'react';
import { Link } from 'react-router-dom';
import PostKeywords from './PostKeywords';

export default function Post(props) {
  const post = props.post;
  const seo = {};

  return (
    <div>
      {post && (
        <article itemScope itemType="http://schema.org/NewsArticle">
          <meta
            itemScope
            itemProp="mainEntityOfPage"
            itemType="https://schema.org/WebPage"
            itemID={seo.url}
          />
          <Link
            to={`blog/${post._id}`}
            itemProp="headline"
            rel="bookmark"
            className="post-title"
            title={post.title}
          >
            {post.title}
          </Link>
          <hr />
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
              />{' '}
              {post.createdAt}
            </li>
            <li className="comments" property="discussionUrl">
              <a
                href="/blog/{post._id}"
                className="btn btn-primary"
                type="button"
              >
                Comments{' '}
                <span
                  className="badge disqus-comment-count"
                  data-disqus-url="http://www.erickizaki.com/blog/{post._id}"
                />
              </a>
            </li>
            {post.keywords &&
              post.keywords.length && (
                <PostKeywords keywords={post.keywords} searchParams={{}} />
              )}
            {/* <li>
                        <add-to-any ng-if="post._id" title="{post.title}" url="/blog/{post._id}"></add-to-any>
                    </li> */}
          </ul>
          <br />
          <blockquote itemProp="description">{post.headingQuote}</blockquote>

          <br />

          {post.photo && (
            <figure
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <meta itemProp="url" content="{post.photo}" />
              <meta itemProp="width" content="200" />
              <meta itemProp="height" content="200" />
              <a href="/blog/{post._id}">
                {/* <b-img public-id="{post.photo}" transformation="w_200,h_200,c_fit" alt="{post.title}" className="img-responsive center-block"></b-img> */}
              </a>
            </figure>
          )}

          <div
            itemProp="publisher"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <div
              itemProp="logo"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <meta
                itemProp="url"
                content="https://www.preservedfw.com/assets/Preserve_US_nav_bar.png"
              />
              <meta itemProp="width" content="76" />
              <meta itemProp="height" content="99" />
            </div>
            <meta itemProp="name" content="Preserve US" />
          </div>
          <br />
          <p className="post-html">{post.postHtml}</p>
        </article>
      )}
    </div>
  );
}
