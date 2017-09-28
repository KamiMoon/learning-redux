import React from 'react';
import { shallow } from 'enzyme';

import { BlogAdd } from './BlogAdd';

it('renders without crashing', () => {
  shallow(<BlogAdd handleSubmit={() => {}} />);
});
