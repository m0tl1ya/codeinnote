import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddingNoteList from '../containers/AddingNoteList';
import CodeEditor from './CodeEditor';
import CodeNote from './CodeNote';
import NavBar from './NavBar';
// import MultiWordCounter from '../containers/MultiWordCounter';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={AddingNoteList} />
            <Route path="/adding-note" component={AddingNoteList} />
            <Route path="/module-list" component={AddingNoteList} />
            <Route path="/create-project" component={AddingNoteList} />
            <Route path="/adding-note" component={AddingNoteList} />
            <Route path="/edit-module" component={AddingNoteList} />
            <Route path="/config-project" component={AddingNoteList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


// const App = () => (
//   <BrowserRouter>
//     <div>
//       <NavBar />
//       <Switch>
//         <Route exact path="/" component={AddingNoteList} />
//         <Route path="/adding-note" component={AddingNoteList} />
//         <Route path="/module-list" component={AddingNoteList} />
//         <Route path="/create-project" component={AddingNoteList} />
//         <Route path="/adding-note" component={AddingNoteList} />
//         <Route path="/edit-module" component={AddingNoteList} />
//         <Route path="/config-project" component={AddingNoteList} />
//       </Switch>
//     </div>
//   </BrowserRouter>
// );
