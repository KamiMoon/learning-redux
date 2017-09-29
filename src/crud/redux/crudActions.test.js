import {
  AJAX_IN_PROGRESS,
  AJAX_SUCCESS,
  AJAX_ERROR,
  REQUEST_TASKS,
  RECIEVE_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  getTasks,
  addTask,
  updateTask,
  deleteTask
} from './crudActions';

import nock from 'nock';
import { mockStore } from '../../setupTests';

describe('async actions', () => {
  let store = null;

  beforeEach(() => {
    store = mockStore({ tasks: [] });
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates RECIEVE_TASKS when fetching tasks has been done', () => {
    nock('http://localhost')
      .get('/api/tasks')
      .reply(200, [{ name: 'hi' }]);

    const expectedActions = [
      { type: REQUEST_TASKS },
      { type: RECIEVE_TASKS, tasks: [{ name: 'hi' }] }
    ];

    return store.dispatch(getTasks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates ADD_TASK when adding has been done', () => {
    const payload = { name: 'hi' };

    nock('http://localhost')
      .post('/api/tasks', payload)
      .reply(201, payload);

    const expectedActions = [
      { type: AJAX_IN_PROGRESS },
      { type: ADD_TASK, task: payload }
    ];

    return store.dispatch(addTask(payload)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates UPDATE_TASK when updateTask', () => {
    const payload = { _id: 1, name: 'hi' };

    nock('http://localhost')
      .put('/api/tasks/1', payload)
      .reply(201, payload);

    const expectedActions = [
      { type: AJAX_IN_PROGRESS },
      { type: UPDATE_TASK, task: payload }
    ];

    return store.dispatch(updateTask(payload)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates DELETE_TASK when deleteTask', () => {
    const payload = { _id: 1, name: 'hi' };

    nock('http://localhost')
      .delete('/api/tasks/1')
      .reply(201, payload);

    const expectedActions = [
      { type: AJAX_IN_PROGRESS },
      { type: DELETE_TASK, task: payload }
    ];

    return store.dispatch(deleteTask(payload)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
