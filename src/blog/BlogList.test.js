import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import { BlogList } from './BlogList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <BlogList dispatch={() => {}} />
    </MemoryRouter>,
    div
  );
});
