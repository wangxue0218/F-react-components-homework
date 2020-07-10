import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleSendMessage = () => {
    if (!this.state.inputValue) return;
    this.props.onUserSendMessage(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSendMessage();
    }
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <button type="button" onClick={this.handleSendMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
