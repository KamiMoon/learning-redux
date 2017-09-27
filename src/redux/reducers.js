import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { loadingSpinnerReducer } from '../components/LoadingSpinner';
import { feedbackReducer } from '../components/feedback/Feedback';
import crudReducer from '../crud/redux/crudReducer';
import blogReducer from '../blog/redux/blogReducer';
import { userReducer } from '../util/User';
//only one for now, but add more later
const rootReducer = combineReducers({
  crud: crudReducer,
  blog: blogReducer,
  loadingSpinner: loadingSpinnerReducer,
  form: formReducer,
  user: userReducer,
  feedback: feedbackReducer
});

export default rootReducer;
