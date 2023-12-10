
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import groupReducer from './groupReducer';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  group: groupReducer,
  project: projectReducer,
});

export default rootReducer;
