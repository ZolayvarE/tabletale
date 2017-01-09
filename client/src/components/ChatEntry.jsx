import React from 'react';
import mindful from '../scripts/mindful.js';

const ChatEntry = (props) => {
  let message = props.message;
  return (
    <div>
      <h5>
        { message.author }
      </h5>
      <div>
        { message.text }
      </div>
    </div>
  );
};

export default ChatEntry;














