import React from 'react';
import ReactDOM from 'react-dom';

import BlogListPost from './BlogListPost';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlogListPost />, div);
});
