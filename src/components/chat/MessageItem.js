import React from 'react';
import classNames from 'classnames';

const MessageItem = (props) => {
  const isAuthorCurrentUser = (props.currentUserEmail == props.message.author);

  const containerClasses = classNames(
    'chat-module-message-container',
    { 'chat-module-message-container-current-user': isAuthorCurrentUser },
  );

  return (
    <div className={containerClasses}>
      { !isAuthorCurrentUser &&
        <div className="chat-module-message-author">{props.message.author}</div>
      }
      <div className="chat-module-message-text">{props.message.content}</div>
    </div>
  );
};

export default MessageItem;
