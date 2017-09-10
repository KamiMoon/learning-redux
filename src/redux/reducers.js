import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from './actions';

const initialState = {
    tasks: []
};

function reducer(previousState = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...previousState,
                tasks: [...previousState.tasks, action.task]
            };
        case DELETE_TASK:
            const tasks = previousState.tasks.filter(task =>
                task.name !== action.task.name
            );

            return {
                ...previousState,
                tasks: tasks
            };
        case UPDATE_TASK:
            const tasks2 = previousState.tasks.map(task =>
                task.name === action.task.name ?
                    { ...task, ...action.task } :
                    task
            )

            return {
                ...previousState,
                tasks: tasks2
            };
        default:
            return previousState
    }
}

export default reducer;