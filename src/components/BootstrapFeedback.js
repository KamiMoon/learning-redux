import { connect } from 'react-redux';
import React from 'react';

let BootstrapFeedback = props => (
  <div>
    {props.showFeedback && (
      <div class="alert alert-error alert-dismissible" role="alert">
        {props.feedbackMessage}
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    showFeedback: state.showFeedback.show
  };
};

BootstrapFeedback = connect(mapStateToProps)(BootstrapFeedback);

//redux

export function showFeedback() {
  return {
    type: 'SHOW_FEEDBACK'
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
      show: true
    };
  } else if (action.type === 'HIDE_FEEDBACK') {
    return {
      show: false
    };
  }

  return state;
}

export default BootstrapFeedback;
