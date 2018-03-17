import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddingNoteList from '../containers/AddingNoteList';
import CodeEditor from './CodeEditor';
import CodeNote from './CodeNote';
import NavBar from './NavBar';
// import MultiWordCounter from '../containers/MultiWordCounter';


// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <NavBar />
//           <Switch>
//             <Route exact path="/" component={CodeNote} />
//             <Route path="/project-list" component={CodeNote} />
//             <Route path="/module-list" component={ViewModules} />
//             <Route path="/create-project" component={CreateProject} />
//             <Route path="/create-module" component={CreateModule} />
//             <Route path="/edit-module" component={EditModule} />
//             <Route path="/config-project" component={CreateProject} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

const App = () => (
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

export default App;
