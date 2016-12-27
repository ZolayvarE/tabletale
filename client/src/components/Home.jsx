import React from 'react';
import { browserHistory } from 'react-router';
import formiliar from '../scripts/formiliar.js';

class Home extends React.Component {
  constructor (props) {
    super(props);
  }


  joinRoom (event) {
    event.preventDefault();
    var roomName = document.getElementById('roomNameField').value;
    formiliar.set('message', roomName);
    document.getElementById('roomNameField').value = '';
  }


  render () {
    return (
      <div className="Home">
        <div className="RoomSelect">
          <div>What room would you like to join?</div>
          <div>{ formiliar.get('message') }</div>
          <form onSubmit={ this.joinRoom }>
            <input type="text" id="roomNameField"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default formiliar(Home, ['message']);
