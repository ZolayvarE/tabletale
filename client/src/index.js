import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router';
import App from './components/App.jsx';
import NavBar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Game from './components/Game.jsx';

ReactDOM.render(

  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='/' component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/:roomname' component={ Game } />
    </Route>
  </Router>

, document.getElementById('app'));






