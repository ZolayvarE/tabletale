import React from 'react';
import mindful from '../scripts/mindful';
import ChatEntry from './ChatEntry.jsx';



class ChatLog extends React.Component {
  componentWillMount() {
    mindful.set('messages', [{
      author: 'Eric',
      text: 'whaddup?',
    }]);
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


export default ChatLog;

