/*
 * action types 
 */

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

/**
 * action creators
 */
export function addTask(task) {
    return {
        type: ADD_TASK,
        task
    };
}

export function deleteTask(task) {
    return {
        type: DELETE_TASK,
        task
    };
}

export function updateTask(task) {
    return {
        type: UPDATE_TASK,
        task
    };
}