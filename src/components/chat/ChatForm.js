import React from 'react';
import toastr from 'toastr';

export default class ChatForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };

    this.handleMessageUpdate = this.handleMessageUpdate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
  }

  handleMessageUpdate(event) {
    this.setState({ content: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const message = {
      content: this.state.content,
      author: this.props.user.email,
    }

    if (this.state.content != '') {
      this.props.actions.sendMessage({ message })
        .then(user => {
          toastr.success('Message sent');
          this.setState({ content: '' });
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
                 value={this.state.content} onChange={this.handleMessageUpdate}
          />

        <button className="chat-module-form-button" type="submit">Send</button>
        </form>
      </div>
    );
  }
}
