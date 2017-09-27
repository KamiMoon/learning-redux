import React from 'react';
import ReactDOM from 'react-dom';

import CrudView from './CrudView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CrudView />, div);
});
