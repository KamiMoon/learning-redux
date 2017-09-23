import { connect } from 'react-redux';
import React from 'react';

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
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        {props.message}
      </div>
    )}
    {/* <div className="alert alert-warning alert-dismissible" role="alert">
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>Warning!</strong> Better check yourself, you're not looking too
      good.
    </div> */}
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
    return showFeedback(err.response.data.message, 'danger');
  }
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
