import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleSendMessage = (event) => {
    this.props.onUserSendMessage(this.state.inputValue);
    this.setState({ inputValue: '' });
    event.preventDefault();
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        <button type="button" onClick={this.handleSendMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
