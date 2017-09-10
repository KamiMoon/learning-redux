import fetch from 'isomorphic-fetch';

/*
 * action types 
 */
export const REQUEST_TASKS = 'REQUEST_TASKS';
export const RECIEVE_TASKS = 'RECIEVE_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

/**
 * action creators
 */
function requestTasks() {
    return {
        type: REQUEST_TASKS
    };
}

function recieveTasks(json) {

    console.log(json);

    return {
        type: RECIEVE_TASKS,
        tasks: json,
        receivedAt: Date.now()
    };
}

function addTaskDispatch(task) {
    return {
        type: ADD_TASK,
        task
    };
}

function deleteTaskDispatch(task) {
    return {
        type: DELETE_TASK,
        task
    };
}

function updateTaskDispatch(task) {
    return {
        type: UPDATE_TASK,
        task
    };
}

/**
 * Async Actions using fetch and thunk
 */

export function getTasks() {
    return function (dispatch) {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        dispatch(requestTasks())

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.

        return fetch(`/api/tasks`)
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

                dispatch(recieveTasks(json))
            )
    }
}

export function addTask(task) {
    return function (dispatch) {

        //dispatch(requestTasks())

        return fetch(`/api/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(
            response => response.json(),
            error => console.log('An error occured.', error)
            )
            .then(json =>
                dispatch(addTaskDispatch(json))
            )
    }
}


export function updateTask(task) {
    return function (dispatch) {

        //dispatch(requestTasks())

        return fetch(`/api/tasks/${task._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(
            response => response.json(),
            error => console.log('An error occured.', error)
            )
            .then(json =>
                dispatch(updateTaskDispatch(json))
            )
    }
}

export function deleteTask(task) {
    return function (dispatch) {

        //dispatch(requestTasks())

        return fetch(`/api/tasks/${task._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(
            error => console.log('An error occured.', error)
            )
            .then(() =>
                dispatch(deleteTaskDispatch(task))
            )
    }
}
