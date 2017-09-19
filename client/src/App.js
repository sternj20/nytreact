import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/nav';
import Main from './components/main';
import Search from './components/search';
import Saved from './components/saved';

// class App extends Component {
//   render() {
//     return (
//       <div>
//       	<Nav />
//       	<Main />
//       	<Search />
//       	<Saved />
//       </div>
//     );
//   }
// }

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
  </Router>;

export default App;






