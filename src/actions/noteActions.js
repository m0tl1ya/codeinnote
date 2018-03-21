export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
// export const EDIT_NOTE = 'EDIT_NOTE';
export const REFRESH = 'REFRESH';
export const EDIT_CODE = 'EDIT_CODE';
export const EDIT_TITLE = 'EDIT_TITLE';
export const EDIT_DESCRIPTION = 'EDIT_DESCRIPTION';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const ADD_TAG = 'ADD_TAG';
export const DELETE_TAG = 'DELETE_TAG';

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

export const editCode = (id, text) => ({
  type: EDIT_CODE,
  id,
  text,
});

export const editTitle = (id, text) => ({
  type: EDIT_TITLE,
  id,
  text,
});

export const editDescription = (id, text) => ({
  type: EDIT_DESCRIPTION,
  id,
  text,
});

export const setLanguage = (id, text) => ({
  type: SET_LANGUAGE,
  id,
  text,
});

export const addTag = (id, tag) => ({
  type: ADD_TAG,
  id,
  tag,
});

export const deleteTag = (id, tag) => ({
  type: DELETE_TAG,
  id,
  tag,
});
