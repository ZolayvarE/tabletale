import React from 'react';
import { browserHistory } from 'react-router';
import mindful from '../scripts/mindful';
import io from 'socket.io-client';

class Game extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    if (!mindful.get('roomName')) {
      browserHistory.push('/');
    } else {
      mindful.set('socket', io.connect());
    }    
  }

  componentWillUnmount () {
    mindful.forget('roomName');
    mindful.get('socket').disconnect();
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

