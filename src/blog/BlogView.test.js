import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import { BlogView } from './BlogView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <BlogView match={{ params: {} }} dispatch={() => {}} />
    </MemoryRouter>,
    div
  );
});
