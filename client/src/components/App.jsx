import React from 'react';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router';
import NavBar from './Navbar.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import d from '../scripts/dice.js';
import mindful from '../scripts/mindful';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (mindful.get('roomName')) {
      browserHistory.push(mindful.get('roomName'));
    }
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