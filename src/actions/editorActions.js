export const EDIT_CODE = 'EDIT_CODE';
export const EDIT_TITLE = 'EDIT_TITLE';
export const EDIT_DESCRIPTION = 'EDIT_DESCRIPTION';
export const SET_LANGUAGE = 'SET_LANGUAGE';

export const editCode = text => ({
  type: EDIT_CODE,
  text,
});

export const editTitle = text => ({
  type: EDIT_TITLE,
  text,
});

export const editDescription = text => ({
  type: EDIT_DESCRIPTION,
  text,
});

export const setLanguage = text => ({
  type: SET_LANGUAGE,
  text,
});
