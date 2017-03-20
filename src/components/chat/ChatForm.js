import React from 'react';
import toastr from 'toastr';

export default class ChatForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {
        text: '',
      },
    };

    this.handleMessageUpdate = this.handleMessageUpdate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleMessageUpdate(event) {
    this.setState({ message: {text: event.target.value} });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    if (this.state.message.text != '') {
      this.props.actions.sendMessage(this.state.message)
        .then(user => {
          toastr.success('Message sent');
          this.setState({ message: {text: ''} });
        })
        .catch(error => {
          toastr.error(error.message);
        });
    }
  }
  render() {
    return (
      <div className="chat-module-form-container">
        <form onSubmit={this.handleFormSubmit}>
          <input className="chat-module-form-input" type="text" placeholder="type your message"
                 value={this.state.message.text} onChange={this.handleMessageUpdate}
          />

        <button className="chat-module-form-button" type="submit">Send</button>
        </form>
      </div>
    );
  }
}
