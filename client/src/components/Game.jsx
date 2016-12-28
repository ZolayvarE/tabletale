import React from 'react';
import { browserHistory } from 'react-router';
import formiliar from '../scripts/formiliar';
import socket from 'socket.io-client';

class Game extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    if (!formiliar.get('roomName')) {
      browserHistory.push('/');
    } else {
      formiliar.set('socket', socket);
    }    
  }

  componentWillUnmount () {
    formiliar.set('roomName', undefined);
    localStorage.removeItem('roomName');
  }

  render () {
    return (
      <div className="Game">
        <canvas className="Paper"></canvas>
        <div className="Chat">
          I am the chat!
        </div>
      </div>
    );
  }

}

export default Game;

