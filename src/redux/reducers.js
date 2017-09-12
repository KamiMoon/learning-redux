import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import crudReducer from '../crud/redux/crudReducer';
import blogReducer from '../blog/redux/blogReducer';
//only one for now, but add more later
const rootReducer = combineReducers({
    crud: crudReducer,
    blog: blogReducer,

    form: formReducer
    
});

export default rootReducer;