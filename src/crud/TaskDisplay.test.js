import React from 'react';
import ReactDOM from 'react-dom';

import TaskDisplay from './TaskDisplay';

it('renders without crashing', () => {
  const div = document.createElement('tbody');
  ReactDOM.render(<TaskDisplay />, div);
});
