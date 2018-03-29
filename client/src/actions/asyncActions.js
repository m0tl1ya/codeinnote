import axios from 'axios';

export const SAVE_NOTE = 'SAVE_NOTE';
export const GET_NOTES_ERROR = 'GET_NOTES_ERROR';
export const LOAD_NOTES = 'LOAD_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES = 'FETCH_NOTES';
export const RECEIVE_NOTE_SUCCESS = 'RECEIVE_NOTE_SUCCESS';
export const RECEIVE_NOTE_FAILED = 'RECEIVE_NOTE_FAILED';


export const getNotesError = status => ({
  type: 'GET_NOTES_ERROR',
  hasError: status,
});

export const loadNotes = status => ({
  type: 'LOAD_NOTES',
  isLoading: status,
});

export const fetchNotesSuccess = modules => ({
  type: 'FETCH_NOTES_SUCCESS',
  modules,
});

export const saveNote = id => ({
  type: SAVE_NOTE,
  id,
});


export function postNote(note) {
  return (dispatch) => {
    dispatch(saveNote(true));
    axios.post('/api/notes', {
      note,
    }).then(response => {
      const noteArray = response.data
      dispatch(receiveNoteSuccess(noteArray));
    }).catch(err => {
      console.error(new Error(err))
      store.dispatch(receiveNoteFailed())
    })

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
