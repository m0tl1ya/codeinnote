import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';

import Paper from 'material-ui/Paper';

// import WordCounterHeader from './WordCounterHeader';
// import TextInput from './TextInput';

import CodeEditor from './CodeEditor';
import TitleInput from './TitleInput';
import SettingBar from './SettingBar';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: theme.spacing.unit,
    width: '90%',
    // marginLeft: '2em',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    possition: 'absolute',
    // flexWrap: 'wrap',
  }),
  // contents: {
  //   width: '90%',
  // },
  // editor: {
  //   // width: '20em',
  //   padding: '1em',
  //   marginLeft: '0.2em',
  //   // marginLeft: '2em',
  //   marginBottom: '0.9em',
  //   marginRight: theme.spacing.unit,
  // },
});


class CodeNote extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   text: this.props.note.text,
    //   words: this.props.note.words,
    //   characters: this.props.note.characters,
    //   allCharacters: this.props.note.characters,
    //   isCounted: this.props.note.isCounted,
    // };
    // this.handleText = this.handleText.bind(this);
    // this.handleState = this.handleState.bind(this);
    // this.handleTitleText = this.handleTitleText.bind(this);
  }


  render() {
    const { classes, note, actions } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        <div className={classes.contents} >
          <TitleInput
            id={note.id}
            title={note.title}
            editTitle={actions.editTitle}
          />
          <SettingBar
            id={note.id}
            language={note.language}
            tags={note.tags}
            setLanguage={actions.setLanguage}
            onAddTag={actions.addTag}
            onDeleteTag={actions.deleteTag}
          />
          <CodeEditor
            id={note.id}
            mode={note.language}
            edit={actions.editCode}
          />
        </div>
      </Paper>
    );
  }
}

CodeNote.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  note: PropTypes.objectOf.isRequired,
  actions: PropTypes.objectOf.isRequired,
  mode: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(CodeNote);
