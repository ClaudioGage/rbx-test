import React from "react";
// Conainer a simple container to center your content horizontally
// Notification bold notification blocks, to alert your users of something
import "rbx/index.css";
import { Container } from "rbx";
import NotificationExample from "./NotificationExample";

const App = () => {
  return (
    <Container>
      <NotificationExample />
    </Container>
  );
}

export default App;