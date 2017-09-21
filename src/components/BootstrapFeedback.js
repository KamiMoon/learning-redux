import { connect } from 'react-redux';
import React from 'react';

let BootstrapFeedback = props => (
  <div>{props.showLoadingSpinner && <div className="loadingSpinner" />}</div>
);

const mapStateToProps = state => {
  return {
    showLoadingSpinner: state.loadingSpinner.show
  };
};

BootstrapFeedback = connect(mapStateToProps)(BootstrapFeedback);

//redux

export function showLoadingSpinner() {
  return {
    type: 'SHOW_LOADING_SPINNER'
  };
}

export function hideLoadingSpinner() {
  return {
    type: 'HIDE_LOADING_SPINNER'
  };
}

export function loadingSpinnerReducer(state = { show: false }, action) {
  if (action.type === 'SHOW_LOADING_SPINNER') {
    return {
      show: true
    };
  } else if (action.type === 'HIDE_LOADING_SPINNER') {
    return {
      show: false
    };
  }

  return state;
}

export default BootstrapFeedback;
