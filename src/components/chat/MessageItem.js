import React from 'react';
import classNames from 'classnames';
import firebaseApi from '../../api/firebase';

const MessageItem = (props) => {
  const currentUserEmail = firebaseApi.currentUser().email;
  const isAuthorCurrentUser = (currentUserEmail == props.message.author);

  const containerClasses = classNames(
    'chat-module-message-container',
    { 'chat-module-message-container-current-user': isAuthorCurrentUser },
  );

  return (
    <div className={containerClasses}>
      { !isAuthorCurrentUser &&
        <div className="chat-module-message-author">{props.message.author}</div>
      }
      <div className="chat-module-message-text">{props.message.text}</div>
    </div>
  );
};

export default MessageItem;
