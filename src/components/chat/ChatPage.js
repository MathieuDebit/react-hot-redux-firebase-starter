import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import checkAuth from '../requireAuth';
import {sendMessage, fetchMessages, listenMessagesUpdates} from '../../actions/messageActions';
import ChatMessages from './ChatMessages';
import ChatForm from './ChatForm';

export class ChatPage extends React.Component {
  componentDidMount() {
    this.props.actions.fetchMessages();
    this.props.actions.listenMessagesUpdates();
  }

  render() {
    return (
      <div className="chat-module-container">
        <h1 className="chat-module-title">ChatX</h1>

        <ChatMessages messages={this.props.messages} />

        <ChatForm actions={this.props.actions} />
      </div>
    );
  }
}

ChatPage.propTypes = {
  actions: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { messages: state.messages };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({sendMessage, fetchMessages, listenMessagesUpdates}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(checkAuth(ChatPage));
