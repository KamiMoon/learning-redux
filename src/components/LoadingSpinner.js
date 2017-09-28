import { connect } from 'react-redux';
import React from 'react';

export function LoadingSpinner(props) {
  return (
    <div>{props.showLoadingSpinner && <div className="loadingSpinner" />}</div>
  );
}

const mapStateToProps = state => ({
  showLoadingSpinner: state.loadingSpinner.show
});

export const showLoadingSpinner = () => ({
  type: 'SHOW_LOADING_SPINNER'
});

export const hideLoadingSpinner = () => ({
  type: 'HIDE_LOADING_SPINNER'
});

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

export default connect(mapStateToProps)(LoadingSpinner);
