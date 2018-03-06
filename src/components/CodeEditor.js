import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 2,
    paddingBottom: 2,
    // marginTop: theme.spacing.unit,
    // width: 600,
    // marginLeft: '1em',
    // display: 'flex',
    // flexWrap: 'wrap',
  }),
  textField: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '35em',
    margin: '1em',
    // marginLeft: '0.2em',
    // // marginLeft: '2em',
    // marginBottom: '0.9em',
    // marginRight: theme.spacing.unit,
  },
});


class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || '',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
    this.props.edit(e.target.value);
  }

  render() {
    const { classes } = this.props;
    return (
      <AceEditor
        mode="java"
        theme="github"
        onChange={this.handleChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
      />

    );
  }
}

CodeEditor.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  edit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(CodeEditor);
