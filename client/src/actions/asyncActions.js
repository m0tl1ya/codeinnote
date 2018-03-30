import axios from 'axios';

export const POST_NOTE = 'POST_NOTE';
export const GET_NOTES_ERROR = 'GET_NOTES_ERROR';
export const LOAD_NOTES = 'LOAD_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES = 'FETCH_NOTES';
export const RECEIVE_NOTE_SUCCESS = 'RECEIVE_NOTE_SUCCESS';
export const RECEIVE_NOTE_FAILED = 'RECEIVE_NOTE_FAILED';


export const receiveNoteFailed = status => ({
  type: 'RECEIVE_NOTE_FAILED',
  hasError: status,
});

export const postNote = status => ({
  type: 'POST_NOTE',
  isLoading: status,
});

export const receiveNoteSuccess = note => ({
  type: 'FETCH_MODULES_SUCCESS',
  note,
});


export function saveNote(note) {
  return (dispatch) => {
    dispatch(postNote(true));
    axios.post('/api/notes', {
      note,
    }).then(response => {
      const noteArray = response.data
      dispatch(receiveNoteSuccess(noteArray));
    }).catch(err => {
      console.error(new Error(err))
      dispatch(receiveNoteFailed())
    });

  }
}

// export function fetchNotes() {
//   return (dispatch) => {
//     dispatch(loadNotes(true));
//
//     db.table('modules')
//       .toArray()
//       .then((modules) => {
//         dispatch(loadNotes(false));
//
//         return modules;
//       })
//       .then(modules => dispatch(fetchNotesSuccess(modules)))
//       .catch(() => dispatch(getNotesError(true)));
//   };
// }


// import db from '../lib/db';
//
