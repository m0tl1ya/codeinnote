import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import { MenuItem, MenuIcon } from 'material-ui/Menu';

const typeOfNote= [
  {
    value: 'Words',
    label: 'Words',
  },
  {
    value: 'Characters',
    label: 'Characters',
  },
  {
    value: 'Characters including space',
    label: 'Characters including space',
  },
];

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    margin: '0.5em',
    alignItems: 'center',
  },
  addButton: {
    margin: '0.5em',
  },
  refreshButton: {
    margin: '0.5em',
    color: 'white',
    backgroundColor: '#2196F3',
  },
  selectField: {
    margin: '0.5em',
  },
  menu: {
    width: 200,
  },
});

class ButtonBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // totalWords: 0,
      // totalCharacters: 0,
      // totalCharactersIncludingSpace: 0,
      // type: 'Words',
    };
    // this.handleType = this.handleType.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleType(event) {
  //   // this.props.editParameterType(id, event.target.value);
  //   this.setState({
  //     type: event.target.value,
  //   });
  //   this.props.switchMode.switchType(event.target.value);
  // }

  render() {
    const { classes, addNote, refresh } = this.props;
    return (
      <div className={classes.root}>
        <Button
          variant="raised"
          color="secondary"
          className={classes.addButton}
          onClick={() => addNote()}
        >
          Add
        </Button>
        <Button
          variant="raised"
          color="primary"
          className={classes.refreshButton}
          onClick={() => refresh()}
        >
          Refresh
        </Button>
      </div>
    );
  }
}


ButtonBar.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  notes: PropTypes.arrayOf.isRequired,
  addNote: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
};

export default withStyles(styles)(ButtonBar);
