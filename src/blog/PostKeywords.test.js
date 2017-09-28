import React from 'react';
import ReactDOM from 'react-dom';

import PostKeywords from './PostKeywords';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostKeywords />, div);
});
