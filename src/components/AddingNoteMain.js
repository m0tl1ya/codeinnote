import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Refresh from 'material-ui-icons/Refresh';

import CodeNote from './CodeNote';


const styles = theme => ({
  container: {
    margin: '1em',
  },
  refreshButton: {
    color: 'white',
    backgroundColor: '#2196F3',
    position: 'fixed',
    bottom: theme.spacing.unit * 12,
    right: theme.spacing.unit * 2,
  },
  addButton: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

class AddingNoteMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, notes, actions } = this.props;
    // console.log(filteredParameters);
    return (
      <div className={classes.container}>
        {notes.map(note =>
          <CodeNote
            note={note}
            actions={actions}
          />)}
        <Button
          variant="fab"
          color="primary"
          className={classes.refreshButton}
          onClick={actions.refresh}
        >
          <Refresh />
        </Button>
        <Button
          variant="fab"
          color="secondary"
          className={classes.addButton}
          onClick={actions.addNote}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

AddingNoteMain.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  notes: PropTypes.arrayOf.isRequired,
  actions: PropTypes.objectOf.isRequired,
  // addNote: PropTypes.func.isRequired,
  // refresh: PropTypes.func.isRequired,
};

export default withStyles(styles)(AddingNoteMain);
