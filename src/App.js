
import React from "react";

// Conainer a simple container to center your content horizontally
// Notification bold notification blocks, to alert your users of something
import { Container, Delete, Notification } from "rbx";
import "rbx/index.css";

export class HelloWorldNotification extends React.Component {
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
const App = () => {
  return (
    <Container>
      <HelloWorldNotification />
    </Container>
  );
}

export default App;