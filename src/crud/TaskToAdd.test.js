import React from 'react';
import ReactDOM from 'react-dom';

import TaskToAdd from './TaskToAdd';

it('renders without crashing', () => {
  const div = document.createElement('tbody');
  ReactDOM.render(<TaskToAdd />, div);
});
