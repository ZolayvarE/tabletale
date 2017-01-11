import React from 'react';
import mindful from '../scripts/mindful.js';

const ChatEntry = (props) => {
  let message = props.message;
  return (
    <div>
      <h5 className='MessageAuthor'>
        { message.author + ':' }
      </h5>
      <div className='MessageText'> 
        { message.text } 
      </div>
    </div>
  );
};

export default ChatEntry;














