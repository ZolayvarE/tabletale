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
  }

  sendMessage(e) {
    e.preventDefault();
    let messageText = document.getElementById('messageText').value;
    if (messageText) {
      let message = {};
      message.author = mindful.get('username');
      message.text = messageText;
      mindful.get('socket').emit('message', message);
      mindful.get('addNewMessage')(message);
    }
    document.getElementById('messageText').value = '';
  }

  componentWillUnmount() {
    mindful.forget('messages');
  }

  render () {
    return (
      <div className="ChatBox">
        <div>
          { mindful.get('messages').map((message, index) => {
            return (<ChatEntry message={message} key={index} />);
          }) }
        </div>
        <div className="SubmitMessage">
          <form onSubmit={this.sendMessage}>
            <input type='text' id="messageText">
            </input>
            <input type='submit'>
            </input>
          </form>
        </div>
      </div>
    );
  }
}


export default mindful(ChatLog, 'messages');

