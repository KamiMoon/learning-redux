import React from 'react';
import ReactDOM from 'react-dom';

import {
  Feedback,
  displayErrors,
  error,
  success,
  warning,
  info,
  showFeedback,
  hideFeedback,
  feedbackReducer
} from './Feedback';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Feedback />, div);
});

it('should create action SHOW_FEEDBACK', () => {
  expect(showFeedback('error', 'danger')).toEqual({
    type: 'SHOW_FEEDBACK',
    message: 'error',
    messageClass: 'danger'
  });
});

it('should create action HIDE_FEEDBACK', () => {
  expect(hideFeedback()).toEqual({
    type: 'HIDE_FEEDBACK'
  });
});

it('should return the initial state', () => {
  expect(feedbackReducer(undefined, {})).toEqual({ show: false });
});

it('should should handle SHOW_LOADING_SPINNER', () => {
  expect(
    feedbackReducer(
      {},
      {
        type: 'SHOW_FEEDBACK',
        message: 'error',
        messageClass: 'danger'
      }
    )
  ).toEqual({
    show: true,
    message: 'error',
    messageClass: 'danger'
  });
});

it('should should handle HIDE_FEEDBACK', () => {
  expect(
    feedbackReducer(
      {},
      {
        type: 'HIDE_FEEDBACK'
      }
    )
  ).toEqual({
    show: false
  });
});
