import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ButtonBar from '../components/ButtonBar';
// import CodeNote from '../components/CodeNote';
import AddingNoteMain from '../components/AddingNoteMain';
import * as NoteActions from '../actions/noteActions';
import * as AsyncActions from '../actions/asyncActions';

const AddingNoteList = ({ notes, actions }) => (
  <div>
    <ButtonBar
      addNote={actions.noteActions.addNote}
      refresh={actions.noteActions.refresh}
    />
    <AddingNoteMain
      notes={notes}
      actions={actions.noteActions}
      saveNote={actions.asyncActions.saveNote}
    />
  </div>
);

AddingNoteList.propTypes = {
  notes: PropTypes.arrayOf.isRequired,
  actions: PropTypes.objectOf.isRequired,
};

const mapStateToProps = state => ({
  notes: state.notes,
});

// console.log(CreateModuleActions);

const mapDispatchToProps = dispatch => ({
  actions: {
    noteActions: bindActionCreators(NoteActions, dispatch),
    asyncActions: bindActionCreators(AsyncActions, dispatch),
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(AddingNoteList);
