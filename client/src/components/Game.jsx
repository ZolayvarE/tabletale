import React from 'react';
import { browserHistory } from 'react-router';
import mindful from '../scripts/mindful';
import socket from 'socket.io-client';

class Game extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    if (!mindful.get('roomName')) {
      browserHistory.push('/');
    } else {
      mindful.set('socket', socket);
    }    
  }

  componentWillUnmount () {
    mindful.forget('roomName');
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

export default mindful(Game, 'roomName');

