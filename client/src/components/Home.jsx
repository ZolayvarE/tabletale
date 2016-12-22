import React from 'react';
import { browserHistory } from 'react-router';

class Home extends React.Component {
  constructor (props) {
    super(props);
  }


  joinRoom (event) {
    event.preventDefault();
    var roomName = document.getElementById('roomNameField').value;
    browserHistory.push(roomName);
  }


  render () {
    return (
      <div className="Home">
        <div className="RoomSelect">
          <div>What room would you like to join?</div>
          <form onSubmit={ this.joinRoom }>
            <input type="text" id="roomNameField"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
