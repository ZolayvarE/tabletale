import React from 'react';
import { browserHistory } from 'react-router';
import mindful from '../scripts/mindful';

class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  joinRoom (event) {
    event.preventDefault();
    var roomName = document.getElementById('roomNameField').value
      .split(' ')
      .map(function (word) {
        word = word.slice(0, 1).toUpperCase() + word.slice(1);
        return word;
      })
      .join(' ');

    if (roomName) {
      document.getElementById('roomNameField').value = '';
      mindful.retain('roomName', roomName);
      browserHistory.push(roomName);
    }
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





