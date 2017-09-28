import React from 'react';
import ReactDOM from 'react-dom';

import { BoostrapInput, BoostrapTextArea } from './BootstrapFields';

const mockProps = {
  meta: {
    touched: false,
    error: false
  },
  input: {
    name: 'some'
  }
};

it('BoostrapInput renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BoostrapInput {...mockProps} />, div);
});

it('BoostrapTextArea renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BoostrapTextArea {...mockProps} />, div);
});
