import React from 'react';
import { browserHistory } from 'react-router';
import formiliar from '../scripts/formiliar';
import socket from 'socket.io-client';

class Game extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    if (formiliar.get('roomName') === undefined || formiliar.get('roomName') === 'TableTale') {
      browserHistory.push('/');
    } else {
      formiliar.set('socket', socket);
    }    
  }

  render () {
    return (
      <div className="Game">
        <img src="../assets/paper-background.png" className="Paper"></img>
        <div className="Chat">
          I am the chat!
        </div>
      </div>
    );
  }

}

export default Game;

