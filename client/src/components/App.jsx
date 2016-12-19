import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import NavBar from './Navbar.jsx';
import About from './About.jsx';
import Home from './Home.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'I am a stateful component!'
    };
  }

  render() {
    return (
      <div>
        <NavBar routes={ this.state.routes } />
        <Router history={ browserHistory }>
          <Route path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='*' component={ Home } />
        </Router>
      </div>
    );
  }

}


export default App;