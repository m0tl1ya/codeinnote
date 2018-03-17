import { combineReducers } from 'redux';
import editors from './editors';
import notes from './notes';
// import mode from './mode';

const rootReducer = combineReducers({
  editors,
  notes,
  // mode,
});

export default rootReducer;
