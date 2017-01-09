import React from 'react';
import mindful from '../scripts/mindful';
import ChatEntry from './ChatEntry.jsx';



class ChatLog extends React.Component {
  componentWillMount() {
    mindful.set('messages', [{
      author: 'You have joined the room:"' + mindful.get('roomName') + '"',
      text: '',
    }]);

    mindful.get('socket').on('message', (data) => {
      mindful.update('messages', (allMessages) => {
        allMessages.push(data.message);
        return allMessages;
      });
    });

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

