import { combineReducers } from 'redux';
import crudReducer from '../crud/redux/crudReducer';
import blogReducer from '../blog/redux/blogReducer';
//only one for now, but add more later
const rootReducer = combineReducers({
    crud: crudReducer,
    blogQueryResult: blogReducer
});

export default rootReducer;