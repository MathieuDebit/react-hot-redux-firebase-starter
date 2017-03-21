import React from 'react';
import MessageItem from './MessageItem';

const ChatMessages = (props) => {
  return (
    <div className="chat-module-messages-container">
      {
        Object.keys(props.messages).map((key) => {
          return (
            <MessageItem
              key={key}
              message={props.messages[key]}
              currentUserEmail={props.user.email}
            />
          );
        })
      }
    </div>
  );
};

export default ChatMessages;
