import React from 'react';
import { browserHistory } from 'react-router';
import mindful from '../scripts/mindful';
import io from 'socket.io-client';
import ChatLog from './ChatLog.jsx';

class Game extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    if (!mindful.get('roomName')) {
      browserHistory.push('/');
      return;
    }
    
    mindful.set('socket', io.connect());
    mindful.get('socket').emit('join', mindful.get('roomName'));
  }

  componentWillUnmount () {
    mindful.forget('roomName');
    mindful.get('socket').disconnect();
    mindful.forget('socket');
  }

  render () {
    return (
      <div className="Game">
        <canvas className="Paper"></canvas>
        <ChatLog />
      </div>
    );
  }

}

export default mindful(Game, 'roomName');

