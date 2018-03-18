import { combineReducers } from 'redux';
// import editors from './editors';
import notes from './notes';
// import mode from './mode';

const rootReducer = combineReducers({
  notes,
  // mode,
});

export default rootReducer;
