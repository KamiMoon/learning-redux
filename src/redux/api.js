/**
 * 
 * Based on http://redux.js.org/docs/recipes/ReducingBoilerplate.html
 */

import * as ajaxUtil from './util/ajaxUtil';

export default
    function api({ dispatch, getState }) {
    return next => action => {
        const {
        method,
        url,
        preType,
        errorType,
        successType,
        successProp,
        payload
      } = action

        if (!method) {
            // Normal action: pass it on
            return next(action)
        }

        if (preType) {
            dispatch({
                type: preType
            });
        }

        let errorT = errorType;

        if(!errorType){
            errorT = 'AJAX_ERROR';
        }

        if (method === 'GET') {

            return ajaxUtil.get(url, payload).then(json =>
                dispatch({
                    type: successType,
                    [successProp]: json
                })
             ).catch(error =>
                dispatch({
                    type: errorT,
                    error
                })
            );
            
        }
        else if (method === 'POST') {
            
            return ajaxUtil.post(url, payload).then(json =>
                dispatch({
                    type: successType,
                    [successProp]: json
                })
            ).catch(error =>
                dispatch({
                    type: errorT,
                    error
                })
            );
        }
        else if (method === 'PUT') {
            return ajaxUtil.put(url, payload).then(json =>
                dispatch({
                    type: successType,
                    [successProp]: json
                })
            ).catch(error =>
                dispatch({
                    type: errorT,
                    error
                })
            );
        }
        else if (method === 'DELETE') {
            return ajaxUtil.doDelete(url).then(json =>
                dispatch({
                    type: successType
                })
            ).catch(error =>
                dispatch({
                    type: errorT,
                    error
                })
            );
        }

    }
}