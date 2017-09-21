import * as ajaxUtil from '../../util/AjaxService';
import { makeActionCreator } from '../../redux/util/actionUtil';

/*
 * action types 
 */
export const AJAX_IN_PROGRESS = 'AJAX_IN_PROGRESS';
export const AJAX_SUCCESS = 'AJAX_SUCCESS';
export const AJAX_ERROR = 'AJAX_ERROR';

export const REQUEST_TASKS = 'REQUEST_TASKS';
export const RECIEVE_TASKS = 'RECIEVE_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

/**
 * action creators
 */
const ajaxInProgressAction = makeActionCreator(AJAX_IN_PROGRESS);
//const ajaxSuccessAction = makeActionCreator(AJAX_SUCCESS);
//const ajaxErrorAction = makeActionCreator(AJAX_ERROR);

const requestTasks = makeActionCreator(REQUEST_TASKS);
function recieveTasks(json) {
  return {
    type: RECIEVE_TASKS,
    tasks: json,
    receivedAt: Date.now()
  };
}
const addTaskAction = makeActionCreator(ADD_TASK, 'task');
const deleteTaskAction = makeActionCreator(DELETE_TASK, 'task');
const updateTaskAction = makeActionCreator(UPDATE_TASK, 'task');

/**
 * Async Actions using fetch and thunk
 */
export function getTasks() {
  return function(dispatch) {
    dispatch(requestTasks());

    return ajaxUtil
      .get(`/api/tasks`)
      .then(json => dispatch(recieveTasks(json)));
  };
}

// export function getTasks() {
//     return {
//         types: [REQUEST_TASKS, RECIEVE_TASKS, AJAX_ERROR],
//         callAPI: () => ajaxUtil.get(`/api/tasks`),
//         payload: {}
//     }
// }

export function addTask(task) {
  return function(dispatch) {
    dispatch(ajaxInProgressAction());

    return ajaxUtil
      .post(`/api/tasks`, task)
      .then(json => dispatch(addTaskAction(json)));
  };
}

export function updateTask(task) {
  return function(dispatch) {
    dispatch(ajaxInProgressAction());

    return ajaxUtil
      .put(`/api/tasks/${task._id}`, task)
      .then(json => dispatch(updateTaskAction(json)));
  };
}

export function deleteTask(task) {
  return function(dispatch) {
    dispatch(ajaxInProgressAction());

    return ajaxUtil
      .doDelete(`/api/tasks/${task._id}`)
      .then(() => dispatch(deleteTaskAction(task)));
  };
}
