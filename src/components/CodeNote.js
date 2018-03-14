import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';

import Paper from 'material-ui/Paper';

// import WordCounterHeader from './WordCounterHeader';
// import TextInput from './TextInput';

import CodeEditor from './CodeEditor';

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
    //   text: this.props.counter.text,
    //   words: this.props.counter.words,
    //   characters: this.props.counter.characters,
    //   allCharacters: this.props.counter.characters,
    //   isCounted: this.props.counter.isCounted,
    // };
    // this.handleText = this.handleText.bind(this);
    // this.handleState = this.handleState.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   // this.setState({ text: nextProps.counter.text });
  //   this.setState({ words: nextProps.counter.words });
  //   this.setState({ characters: nextProps.counter.characters });
  //   this.setState({ allCharacters: nextProps.counter.allCharacters });
  //   this.setState({ isCounted: nextProps.counter.isCounted });
  // }
  //
  // handleText(text) {
  //   if (this.state.isCounted) {
  //     const arrayOfWords = text.match(/\S+/g);
  //     const arrayOfCharacterss = text.match(/\S/g);
  //
  //     let wordsOfText;
  //     let characterOfText;
  //     if (arrayOfWords != null) {
  //       wordsOfText = arrayOfWords.length;
  //     } else {
  //       wordsOfText = 0;
  //     }
  //     if (arrayOfCharacterss != null) {
  //       characterOfText = arrayOfCharacterss.length;
  //     } else {
  //       characterOfText = 0;
  //     }
  //     this.props.actions.editCounter(
  //       this.props.counter.id,
  //       text,
  //       wordsOfText,
  //       characterOfText,
  //       text.length,
  //       true
  //     );
  //   }
  // }
  //
  // handleState() {
  //   if (this.state.isCounted) {
  //     // this.setState({ isCounted: false });
  //     this.props.actions.editCounter(this.props.counter.id, this.props.counter.text, 0, 0, false);
  //   } else {
  //     // this.setState({ isCounted: true });
  //     const arrayOfWords = this.props.counter.text.match(/\S+/g);
  //     const arrayOfCharacterss = this.props.counter.text.match(/\S/g);
  //
  //     let wordsOfText;
  //     let characterOfText;
  //     const allCharactersOfText = this.props.counter.text.length;
  //     if (arrayOfWords != null) {
  //       wordsOfText = arrayOfWords.length;
  //     } else {
  //       wordsOfText = 0;
  //     }
  //     if (arrayOfCharacterss != null) {
  //       characterOfText = arrayOfCharacterss.length;
  //     } else {
  //       characterOfText = 0;
  //     }
  //     this.props.actions.editCounter(
  //       this.props.counter.id,
  //       this.props.counter.text,
  //       wordsOfText,
  //       characterOfText,
  //       allCharactersOfText,
  //       true
  //     );
  //   }
  // }

  render() {
    const { classes, counter, actions, mode } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        <div className={classes.contents} >
          <CodeEditor />
        </div>
      </Paper>
    );
  }
}

CodeNote.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  counter: PropTypes.objectOf.isRequired,
  actions: PropTypes.objectOf.isRequired,
  mode: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(CodeNote);