import React from 'react';
import mindful from '../scripts/mindful.js';

const ChatEntry = (props) => {
  let message = props.message;
  return (
    <div>
      { (message.author ? <h5 className='MessageAuthor'>{ message.author + ':' }</h5> : undefined ) }
      { (message.author ? <div className='MessageText'> { message.text } </div> : undefined ) }
    </div>
  );
};

export default ChatEntry;














