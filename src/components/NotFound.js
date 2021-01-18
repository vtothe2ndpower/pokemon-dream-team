import React, { Component } from 'react';
import Message from './Message';

class NotFound extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1>Error: Page Not Found 404</h1>
        </Message>
      </div>
    )
  }
}

export default NotFound;