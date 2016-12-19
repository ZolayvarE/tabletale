import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import NavBar from './Navbar.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'I\'m a stateful component!'
    };
  }

  render() {
    return (
      <div>
        { this.state.message }
      </div>
    );
  }

}


export default App;