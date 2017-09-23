import { connect } from 'react-redux';
import React from 'react';
import { store } from '../index';

let Feedback = props => (
  <div>
    {props.show && (
      <div
        className={'alert alert-' + props.messageClass + ' alert-dismissible'}
        role="alert"
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => {
            props.dispatch(hideFeedback());
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        {props.message}
      </div>
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    show: state.feedback.show,
    messageClass: state.feedback.messageClass,
    message: state.feedback.message
  };
};

Feedback = connect(mapStateToProps)(Feedback);

export function displayErrors(err) {
  if (err && err.response && err.response.data && err.response.data.message) {
    error(err.response.data.message);
  }
}

export function error(text) {
  store.dispatch(showFeedback(text || 'Error!', 'danger'));
}

export function success(text) {
  store.dispatch(showFeedback(text || 'Success!', 'success'));
}

export function warning(text) {
  store.dispatch(showFeedback(text || 'Warning:', 'warning'));
}

export function info(text) {
  store.dispatch(showFeedback(text || 'Info:', 'info'));
}

//redux

export function showFeedback(message, messageClass) {
  return {
    type: 'SHOW_FEEDBACK',
    message,
    messageClass
  };
}

export function hideFeedback() {
  return {
    type: 'HIDE_FEEDBACK'
  };
}

export function feedbackReducer(state = { show: false }, action) {
  if (action.type === 'SHOW_FEEDBACK') {
    return {
      show: true,
      message: action.message,
      messageClass: action.messageClass
    };
  } else if (action.type === 'HIDE_FEEDBACK') {
    return {
      show: false
    };
  }

  return state;
}

export default Feedback;
