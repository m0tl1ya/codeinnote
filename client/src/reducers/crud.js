import {
  POST_NOTE,
  // GET_NOTES_ERROR,
  // LOAD_NOTES,
  // FETCH_NOTES_SUCCESS,
  // FETCH_NOTES,
  RECEIVE_NOTE_SUCCESS,
  RECEIVE_NOTE_FAILED,
} from '../actions/asyncActions';

// const initialState = [
//   {
//     id: 0,
//     title: '',
//     code: '',
//     language: 'javascript',
//     tags: ['React'],
//   },
// ];

export const receiveNoteFailed = (state = false, action) => {
  switch (action.type) {
    case RECEIVE_NOTE_FAILED:
      return action.hasError;
    default:
      return state;
  }
};

export const postNote = (state = false, action) => {
  switch (action.type) {
    case POST_NOTE:
      return action.isLoading;
    default:
      return state;
  }
};

export const savedNote = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_NOTE_SUCCESS:
      return action.note;
    default:
      return state;
  }
};

export default savedNote;
