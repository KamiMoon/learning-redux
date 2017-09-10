import { combineReducers } from 'redux';
import { REQUEST_TASKS, RECIEVE_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK } from './actions';


function crudReducer(state = {
    isFetching: false,
    didInvalidate: false,
    tasks: []
}, action) {

    switch (action.type) {
        case REQUEST_TASKS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case RECIEVE_TASKS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                tasks: action.tasks,
                lastUpdated: action.receivedAt
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            };
        case DELETE_TASK:
            const tasks = state.tasks.filter(task =>
                task.name !== action.task.name
            );

            return {
                ...state,
                tasks: tasks
            };
        case UPDATE_TASK:
            const tasks2 = state.tasks.map(task =>
                task.name === action.task.name ?
                    { ...task, ...action.task } :
                    task
            )

            return {
                ...state,
                tasks: tasks2
            };

        default:
            return state
    }
}

//only one for now, but add more later
const rootReducer = combineReducers({
    crud: crudReducer
});

export default rootReducer