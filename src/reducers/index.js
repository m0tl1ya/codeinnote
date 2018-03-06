import { combineReducers } from 'redux';
import editors from './editors';
// import mode from './mode';

const rootReducer = combineReducers({
  counters,
  // mode,
});

export default rootReducer;
