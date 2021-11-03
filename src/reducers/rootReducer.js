import { combineReducers } from 'redux';
import planetsReducer from './index';

const rootReducer = combineReducers({ planetsReducer });

export default rootReducer;
