import {
  ADD_NOTE,
  DELETE_NOTE,
  REFRESH,
  EDIT_CODE,
  EDIT_TITLE,
  EDIT_DESCRIPTION,
  SET_LANGUAGE,
  ADD_TAG,
  DELETE_TAG,
} from '../actions/noteActions';

const initialState = [
  {
    id: 0,
    title: '',
    code: '',
    language: 'javascript',
    tags: ['React'],
  },
];

function notes(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: state.reduce((maxId, note) => Math.max(note.id, maxId), -1) + 1,
          title: '',
          code: '',
          language: 'javascript',
          tags: [],
        },
      ];
    case DELETE_NOTE:
      return state.filter(note =>
        note.id !== action.id);

    case REFRESH:
      return state.filter(note =>
        note.id === -1);

    case EDIT_CODE:
      return state.map(note =>
          note.id === action.id ?
          {
            ...note,
            code: action.text,
          } :
          note);

    case EDIT_TITLE:
      return state.map(note =>
          note.id === action.id ?
          {
            ...note,
            title: action.text,
          } :
          note);

    case SET_LANGUAGE:
      return state.map(note =>
          note.id === action.id ?
          {
            ...note,
            language: action.text,
          } :
          note);

    case ADD_TAG:
      return state.map(note =>
          note.id === action.id ?
          {
            ...note,
            tags: [...note.tags, action.tag],
          } :
          note);

    case DELETE_TAG:
      return state.map(note =>
          note.id === action.id ?
          {
            ...note,
            tags: note.tags.filter(n => n != action.tag),
          } :
          note);
    default:
      return state;
  }
}

export default notes;
