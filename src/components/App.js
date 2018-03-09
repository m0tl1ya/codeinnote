import React, { Component } from 'react';

import CodeEditor from './CodeEditor';
import CodeNote from './CodeNote';
// import MultiWordCounter from '../containers/MultiWordCounter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CodeNote />
      </div>
    );
  }
}

export default App;
