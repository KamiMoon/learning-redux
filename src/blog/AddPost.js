import React from 'react';
import { Link } from 'react-router-dom';

export default function AddPost(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <Link to="/blog/add" className="btn btn-default btn-lg" role="button">
          Add Post
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
}
