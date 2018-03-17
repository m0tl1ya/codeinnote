export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
// export const EDIT_NOTE = 'EDIT_NOTE';
export const REFRESH = 'REFRESH';

export const addNote = () => ({
  type: ADD_NOTE,
});

export const deleteNote = id => ({
  type: DELETE_NOTE,
  id,
});

export const refresh = () => ({
  type: REFRESH,
});
