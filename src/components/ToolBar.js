import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';


import { withStyles } from 'material-ui/styles';

import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui-icons/Clear';
import Button from 'material-ui/Button';

import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

import Paper from 'material-ui/Paper';




const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: theme.spacing.unit,
    width: 600,
    marginLeft: '1em',
    display: 'flex',
    alignItems: 'center',
    // flexWrap: 'wrap',
  }),
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    // top: '0.5em',
    // bottom: '0.5em',
    marginLeft: '2em',
    marginRight: theme.spacing.unit,
    width: '20em',
    // paddingBottom: '0em',
  },
  selectField: {
    // bottom: '0.5em',
    marginLeft: '15em',
    marginRight: theme.spacing.unit,
    width: '10em',
  },
  menu: {
    width: 200,
  },
  deleteButton: {
    // top: '0.5em',
  },
});

const typeOfParameters = [
  'javascript',
  'java',
  'python',
  'xml',
  'ruby',
  'sass',
  'markdown',
  'mysql',
  'json',
  'html',
  'handlebars',
  'golang',
  'csharp',
  'elixir',
  'typescript',
  'css'
];

class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      name: '',
      type: '', //this.props.parameter.type,
      error: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleType = this.handleType.bind(this);
  }

  // componentWillMount() {
  //   this.setState({ name: this.props.parameter.text });
  //   // console.log('mount')
  //   this.setState({ type: this.props.parameter.type || 'Number' });
  // }

  handleClick() {
    // console.log('handleDoubleClick');
    // console.log(this.state.editing); // always false
    this.setState({ editing: true });
    // console.log(this.state.editing); // always false
    // e.preventDefault();
  }

  handleSave(id, text) {
    // console.log('handleSave');
    if (text.length === 0) {
      this.props.deleteParameter(id);
    } else {
      this.props.editParameter(id, text.replace(/\s/g, '_'));
      // console.log(this.props.parameter);
    }
    this.setState({ editing: false });
  }

  handleType = (id, name) => event => {
    this.props.editParameterType(id, event.target.value);
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes, parameter, deleteParameter }
     = this.props;
    return (
      <div>
        <TextField
          id="select-type"
          select
          label="Type"
          className={classes.selectField}
          value={this.state.type}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {typeOfParameters.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>


      </div>
    );
  }
}



ToolBar.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  parameter: PropTypes.objectOf.isRequired,
  editParameter: PropTypes.func.isRequired,
  deleteParameter: PropTypes.func.isRequired,
};

export default withStyles(styles)(ToolBar);
