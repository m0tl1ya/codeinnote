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
import Chip from 'material-ui/Chip';


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
    width: '5em',
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
  chip: {
    margin: theme.spacing.unit / 2,
  },
  tags: {
    flexWrap: 'wrap',
    margin: '1em',
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

class SettingBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      tagText: '',
      type: '', //this.props.parameter.type,
      error: false,
    };
    // this.handleClick = this.handleClick.bind(this);
    // this.handleSave = this.handleSave.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  // componentWillMount() {
  //   this.setState({ name: this.props.parameter.text });
  //   // console.log('mount')
  //   this.setState({ type: this.props.parameter.type || 'Number' });
  // }

  // handleClick() {
  //   // console.log('handleDoubleClick');
  //   // console.log(this.state.editing); // always false
  //   this.setState({ editing: true });
  //   // console.log(this.state.editing); // always false
  //   // e.preventDefault();
  // }
  //
  // handleSave(id, text) {
  //   // console.log('handleSave');
  //   if (text.length === 0) {
  //     this.props.deleteParameter(id);
  //   } else {
  //     this.props.editParameter(id, text.replace(/\s/g, '_'));
  //     // console.log(this.props.parameter);
  //   }
  //   this.setState({ editing: false });
  // }

  handleType(event) {
    // this.props.editParameterType(id, event.target.value);
    this.setState({
      type: event.target.value,
    });
    this.props.setLanguage(this.props.id, event.target.value);
  }

  handleSubmit(e) {
    // console.log('handleSubmit');
    const text = e.target.value.trim();
    // console.log(text)
    if (e.which === 13 & text.length > 0) { // Enter key
      if (this.props.tags.filter(tag => tag == text).length == 0) {
        this.props.onAddTag(this.props.id, text);
        this.setState({ tagText: '' });
      }
    }
  }

  handleChange(e) {
    // console.log('handleChange');
    this.setState({ tagText: e.target.value });
  }

  handleDelete = data => () => {
    this.props.onDeleteTag(this.props.id, data);
  };


  render() {
    const { classes, tags }
     = this.props;
    return (
      <div>
        <TextField
          id="name"
          label="Add tag"
          value={this.state.tagText}
          labelClassName={classes.textField}
          InputClassName={classes.textField}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
          autoFocus="false"
          margin="normal"
        />
        <TextField
          id="select-type"
          select
          label="Type"
          className={classes.selectField}
          value={this.props.language}
          onChange={this.handleType}
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
        <div className={classes.tags}>
          {tags.map(tag =>
            <Chip
              key={tag}
              label={tag}
              onDelete={this.handleDelete(tag)}
              className={classes.chip}
            />)}
        </div>



      </div>
    );
  }
}


SettingBar.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  // parameter: PropTypes.objectOf.isRequired,
  id: PropTypes.number.isRequired,
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
  onAddTag: PropTypes.func.isRequired,
  onDeleteTag: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf.isRequired,
  // deleteParameter: PropTypes.func.isRequired,
};

export default withStyles(styles)(SettingBar);
