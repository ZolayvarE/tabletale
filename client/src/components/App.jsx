import React from 'react';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router';
import NavBar from './Navbar.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import d from '../scripts/dice.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'I am a stateful component!',
    };
  }

  render() {
    return (
      <div id="ReactRoot">
        <NavBar />
        { this.props.children }
      </div>
    );
  }

}


export default App;