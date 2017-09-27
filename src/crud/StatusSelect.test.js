import React from 'react';
import ReactDOM from 'react-dom';

import StatusSelect from './StatusSelect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusSelect />, div);
});
