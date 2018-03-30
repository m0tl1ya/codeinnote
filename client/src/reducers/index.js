import { combineReducers } from 'redux';
// import editors from './editors';
import notes from './notes';
// import mode from './mode';
import {
  receiveNoteFailed,
  postNote,
  savedNote,
} from './crud';

const rootReducer = combineReducers({
  notes,
  receiveNoteFailed,
  postNote,
  savedNote,
  // mode,
});

export default rootReducer;
