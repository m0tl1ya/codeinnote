import { combineReducers } from 'redux';
import editors from './editors';
// import mode from './mode';

const rootReducer = combineReducers({
  editors,
  // mode,
});

export default rootReducer;
