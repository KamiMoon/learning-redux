/**
 * 
 * Based on http://redux.js.org/docs/recipes/ReducingBoilerplate.html
 */

import * as ajaxUtil from '../util/AjaxService';
import { SubmissionError } from 'redux-form';
import {
  showLoadingSpinner as showLoadingSpin,
  hideLoadingSpinner
} from '../components/LoadingSpinner';

export default function api({ dispatch, getState }) {
  function handleErrors(errorT, error) {
    dispatch(hideLoadingSpinner());

    if (error.response && error.response.data && error.response.data.errors) {
      let errorObj = {};
      for (let key in error.response.data.errors) {
        errorObj[key] = error.response.data.errors[key].message;
      }
      dispatch({
        type: errorT,
        errorObj
      });

      throw new SubmissionError(errorObj);
    } else {
      dispatch({
        type: errorT,
        error
      });
    }
  }

  function handleSuccess(
    showLoadingSpinner,
    successType,
    successProp,
    payload
  ) {
    if (showLoadingSpinner) {
      dispatch(hideLoadingSpinner());
    }

    let obj = {
      type: successType
    };

    if (successProp && payload) {
      obj[successProp] = payload;
    }

    dispatch(obj);
  }

  return next => action => {
    const {
      method,
      url,
      preType,
      showLoadingSpinner,
      errorType,
      successType,
      successProp,
      payload
    } = action;

    if (!method) {
      // Normal action: pass it on
      return next(action);
    }

    if (preType) {
      dispatch({
        type: preType
      });
    }

    if (showLoadingSpinner) {
      dispatch(showLoadingSpin());
    }

    let errorT = errorType;

    if (!errorType) {
      errorT = 'AJAX_ERROR';
    }

    if (method === 'GET') {
      return ajaxUtil
        .get(url, payload)
        .then(json => {
          handleSuccess(showLoadingSpinner, successType, successProp, json);
        })
        .catch(error => {
          handleErrors(errorT, error);
        });
    } else if (method === 'POST') {
      return ajaxUtil
        .post(url, payload)
        .then(json => {
          handleSuccess(showLoadingSpinner, successType, successProp, json);
        })
        .catch(error => {
          handleErrors(errorT, error);
        });
    } else if (method === 'PUT') {
      return ajaxUtil
        .put(url, payload)
        .then(json => {
          handleSuccess(showLoadingSpinner, successType, successProp, json);
        })
        .catch(error => {
          handleErrors(errorT, error);
        });
    } else if (method === 'DELETE') {
      return ajaxUtil
        .doDelete(url)
        .then(json => {
          handleSuccess(showLoadingSpinner, successType);
        })
        .catch(error => {
          handleErrors(errorT, error);
        });
    }
  };
}
