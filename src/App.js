import React from "react";
// Conainer a simple container to center your content horizontally
// Notification bold notification blocks, to alert your users of something
import "rbx/index.css";
import { Container } from "rbx";
import NotificationExample from "./NotificationExample";
import BreadcrumbExample from "./BreadcrumbExample";
import CardExample from "./CardExample";
import DropdownExample from "./DropdownExample";

const App = () => {
  return (
    <Container>
      <NotificationExample />
      <BreadcrumbExample />
      <CardExample />
      <br />
      <DropdownExample />
    </Container>
  );
}

export default App;