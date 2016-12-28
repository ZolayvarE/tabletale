import React from 'react';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router';
import NavBar from './Navbar.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import d from '../scripts/dice.js';
import formiliar from '../scripts/formiliar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (localStorage.roomName) {
      formiliar.set('roomName', localStorage.roomName);
      browserHistory.push(localStorage.roomName);
    } else {
      formiliar.set('roomName', 'TableTale');
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