/**
 * convenient defaults and helper methods
 * Wrapper over fetch.
 * 
 * TODO: error handling
 */

import fetch from 'isomorphic-fetch';

export function get(url) {
    return fetch(url)
        .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing an loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
    );
}

export function post(url, payload) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(
        response => response.json(),
    );
}

export function put(url, payload) {
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(
        response => response.json(),
    )
}

export function doDelete(url) {
    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(
        () => { },
    )
}

//TODO - not used


function api(config) {

    return function (dispatch) {
        if (config.precall) {
            dispatch(config.precall())
        }

        if (!config.method || config.method === 'GET') {
            return fetch(config.url)
                .then(
                response => response.json(),
                // Do not use catch, because that will also catch
                // any errors in the dispatch and resulting render,
                // causing an loop of 'Unexpected batch number' errors.
                // https://github.com/facebook/react/issues/6895
                error => console.log('An error occured.', error)
                )
                .then(json =>
                    // We can dispatch many times!
                    // Here, we update the app state with the results of the API call.

                    dispatch(config.postcall(json))
                )
        }
        else if (config.method === 'POST' || config.methos === 'PUT') {
            return fetch(config.url, {
                method: config.method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(config.payload)
            })
                .then(
                response => response.json(),
                error => console.log('An error occured.', error)
                )
                .then(json =>
                    dispatch(config.postcall(json))
                )
        }
        else if (config.method === 'DELETE') {
            return fetch(config.url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(
                () => { },
                error => console.log('An error occured.', error)
                )
                .then(() =>
                    dispatch(config.postcall(config.payload))
                )
        }
    }
}