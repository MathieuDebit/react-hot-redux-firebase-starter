import React from 'react';
import MessageItem from './MessageItem';

const ChatMessages = (props) => {
  return (
    <div className="chat-module-messages-container">
      {
        Object.keys(props.messages).map((key) => {
          return (
            <MessageItem key={key} message={props.messages[key]} />
          );
        })
      }
    </div>
  );
};

export default ChatMessages;
