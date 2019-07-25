import { combineReducers } from 'redux';

import jobReducer from './jobs';

const rootReducer = combineReducers({ job: jobReducer });

export default rootReducer;
