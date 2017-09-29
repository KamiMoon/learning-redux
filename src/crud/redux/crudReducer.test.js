import {
  REQUEST_TASKS,
  RECIEVE_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK
} from './crudActions';

import reducer from './crudReducer';

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    isFetching: false,
    didInvalidate: false,
    tasks: []
  });
});

it('should should handle REQUEST_TASKS', () => {
  expect(
    reducer(
      {},
      {
        type: REQUEST_TASKS
      }
    )
  ).toEqual({
    isFetching: true,
    didInvalidate: false
  });
});

it('should should handle RECIEVE_TASKS', () => {
  expect(
    reducer(
      {},
      {
        type: RECIEVE_TASKS,
        tasks: []
      }
    )
  ).toEqual({
    isFetching: false,
    didInvalidate: false,
    tasks: []
  });
});

it('should should handle ADD_TASK', () => {
  expect(
    reducer(
      {
        tasks: []
      },
      {
        type: ADD_TASK,
        task: { _id: 1 }
      }
    )
  ).toEqual({
    tasks: [{ _id: 1 }]
  });
});

it('should should handle DELETE_TASK', () => {
  expect(
    reducer(
      {
        tasks: [{ name: 1 }]
      },
      {
        type: DELETE_TASK,
        task: { name: 1 }
      }
    )
  ).toEqual({
    tasks: []
  });
});

it('should should handle UPDATE_TASK', () => {
  expect(
    reducer(
      {
        tasks: [{ name: 1, something: 1 }]
      },
      {
        type: UPDATE_TASK,
        task: { name: 1, something: 2 }
      }
    )
  ).toEqual({
    tasks: [{ name: 1, something: 2 }]
  });
});
