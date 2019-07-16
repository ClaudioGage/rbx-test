import React from "react";
import { Delete, Notification } from "rbx";
import "rbx/index.css";

class NotificationExample extends React.Component {
  state = { 
    active: true 
  };

  onClose = () => {
    this.setState({ active: false });
  };

  render() {
    if (!this.state.active) {
      return (
        <div>
          <span>You've closed the notification </span>
          <span role="img" aria-label="shoe">
            👟
          </span>
        </div>
      );
    }
    return (
      <Notification color="danger">
        Welcome to{" "}
        <span role="img" aria-label="shoe">
          👟
        </span>{" "}
        <strong>rbx</strong>
        <Delete onClick={this.onClose} />
      </Notification>
    );
  }
}

export default NotificationExample;