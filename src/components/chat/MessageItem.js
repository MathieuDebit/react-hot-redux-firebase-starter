import React from 'react';
import firebaseApi from '../../api/firebase';

const MessageItem = (props) => {
  const currentUserEmail = firebaseApi.currentUser().email;
  const isAuthorCurrentUser = currentUserEmail == props.message.author
  const containerClasses = isAuthorCurrentUser ? '-current-user' : '';

  return (
    <div className={`chat-module-message-container${containerClasses}`}>
      { !isAuthorCurrentUser &&
        <div className="chat-module-message-author">{props.message.author}</div>
      }
      <div className="chat-module-message-text">{props.message.text}</div>
    </div>
  );
};

export default MessageItem;
