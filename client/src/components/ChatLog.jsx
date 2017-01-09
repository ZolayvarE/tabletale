import React from 'react';
import mindful from '../scripts/mindful';
import ChatEntry from './ChatEntry.jsx';



class ChatLog extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    mindful.set('messages', [{
      author: 'You have joined the room:"' + mindful.get('roomName') + '"',
      text: '',
    }]);

    mindful.get('socket').on('message', (newMessage) => {
      mindful.update('messages', (allMessages) => {
        allMessages.push(newMessage);
        return allMessages;
      });

      console.log(mindful.get('messages'));
    });

    mindful.get('socket').emit('message', {author: 'dad', text: 'mom'});

  }

  componentWillUnmount() {
    mindful.forget('messages');
  }

  render () {
    return (
      <div>
        { mindful.get('messages').map((message, index) => {
          return (<ChatEntry message={message} key={index} />);
        }) }
      </div>
    );
  }
}


export default mindful(ChatLog, 'messages');

