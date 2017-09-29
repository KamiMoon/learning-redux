import React from 'react';
import ReactDOM from 'react-dom';

import {
  LoadingSpinner,
  showLoadingSpinner,
  hideLoadingSpinner,
  loadingSpinnerReducer
} from './LoadingSpinner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoadingSpinner />, div);
});

it('should create action SHOW_LOADING_SPINNER', () => {
  expect(showLoadingSpinner()).toEqual({
    type: 'SHOW_LOADING_SPINNER'
  });
});

it('should create action HIDE_LOADING_SPINNER', () => {
  expect(hideLoadingSpinner()).toEqual({
    type: 'HIDE_LOADING_SPINNER'
  });
});

it('should return the initial state', () => {
  expect(loadingSpinnerReducer(undefined, {})).toEqual({ show: false });
});

it('should should handle SHOW_LOADING_SPINNER', () => {
  expect(
    loadingSpinnerReducer(
      {},
      {
        type: 'SHOW_LOADING_SPINNER'
      }
    )
  ).toEqual({ show: true });
});

it('should should handle HIDE_LOADING_SPINNER', () => {
  expect(
    loadingSpinnerReducer(
      {},
      {
        type: 'HIDE_LOADING_SPINNER'
      }
    )
  ).toEqual({ show: false });
});
