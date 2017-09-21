import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import api from './api';
import reducer from './reducers';

const loggerMiddleware = createLogger();

const configureStore = preloadedState => {
  const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      api,
      loggerMiddleware // neat middleware that logs actions
    )
  );

  return store;
};

export default configureStore;
