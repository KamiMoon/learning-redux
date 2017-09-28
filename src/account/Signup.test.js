import React from 'react';
import { shallow } from 'enzyme';

import { Signup } from './Signup';

it('renders without crashing', () => {
  shallow(<Signup handleSubmit={() => {}} />);
});
