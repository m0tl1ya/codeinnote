import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/python';
import 'brace/theme/github';

/*eslint-disable no-alert, no-console */
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';


const languages = [
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
  'css',
];

const themes = [
  'monokai',
  'github',
  'tomorrow',
  'kuroir',
  'twilight',
  'xcode',
  'textmate',
  'solarized_dark',
  'solarized_light',
  'terminal',
];

languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
  require(`brace/snippets/${lang}`)
});

themes.forEach((theme) => {
  require(`brace/theme/${theme}`)
});


const defaultValue =
`function onLoad(editor) {
  console.log(\"i\'ve loaded\");
}`;

const styles = theme => ({
  root: theme.mixins.gutters({
    margin: '2em',
    width: 'auto',
    // padding: '2em',
    // width: '80em',
    // marginTop: theme.spacing.unit,
    // width: 600,
    // marginLeft: '1em',
    // display: 'flex',
    flexWrap: 'wrap',
  }),
});


class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.code || '',
      theme: 'monokai',
      mode: this.props.mode,
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      fontSize: 14,
      showGutter: true,
      showPrintMargin: true,
      highlightActiveLine: true,
      enableSnippets: false,
      showLineNumbers: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
    this.setBoolean = this.setBoolean.bind(this);
  }

  // onLoad() {
  //   console.log('i\'ve loaded');
  // }

  handleChange(newValue) {
    this.setState({
      value: newValue
    })
    this.props.edit(this.props.id, newValue)
  }
  //
  // onSelectionChange(newValue, event) {
  //   console.log('select-change', newValue);
  //   console.log('select-change-event', event);
  // }
  //
  // onCursorChange(newValue, event) {
  //   // this.setState({
  //   //   value: newValue
  //   // })
  //   // this.props.edit(this.props.id, newValue)
  // }
  //
  // onValidate(annotations) {
  //   console.log('onValidate', annotations);
  // }
  //
  // setTheme(e) {
  //   this.setState({
  //     theme: e.target.value
  //   })
  // }
  // setMode(e) {
  //   this.setState({
  //     mode: e.target.value
  //   })
  // }
  setBoolean(name, value) {
    this.setState({
      [name]: value
    })
  }
  setFontSize(e) {
    this.setState({
      fontSize: parseInt(e.target.value,10)
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <AceEditor
            className={classes.root}
            mode={this.props.mode}
            theme={this.state.theme}
            name="blah2"
            onLoad={this.onLoad}
            onChange={this.handleChange}
            onSelectionChange={this.onSelectionChange}
            onCursorChange={this.onCursorChange}
            onValidate={this.onValidate}
            value={this.props.code}
            fontSize={this.state.fontSize}
            showPrintMargin={this.state.showPrintMargin}
            showGutter={this.state.showGutter}
            highlightActiveLine={this.state.highlightActiveLine}
            setOptions={{
              enableBasicAutocompletion: this.state.enableBasicAutocompletion,
              enableLiveAutocompletion: this.state.enableLiveAutocompletion,
              enableSnippets: this.state.enableSnippets,
              showLineNumbers: this.state.showLineNumbers,
              tabSize: 2,
            }}/>

    );
  }
}

CodeEditor.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  id: PropTypes.number.isRequired,
  // editCode: PropTypes.objectOf.isRequired,
  edit: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default withStyles(styles)(CodeEditor);
