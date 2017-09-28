import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import BlogContainer from './BlogContainer';

it('renders without crashing', () => {
  shallow(
    <MemoryRouter>
      <BlogContainer match={{ url: 'mock' }} />
    </MemoryRouter>
  );
});
