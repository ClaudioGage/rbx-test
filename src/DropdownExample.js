import React from "react";
import { Dropdown, Button, Icon } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "rbx/index.css";

const DropdownExample = () => {
  return (
    <div style={{ height: '200px' }}>
      <Dropdown>
        <Dropdown.Trigger>
          <Button>
            <span>Dropdown button</span>
            <Icon size="small">
              <FontAwesomeIcon icon={faAngleDown} />
            </Icon>
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Content>
            <Dropdown.Item>Dropdown item</Dropdown.Item>
            <Dropdown.Item>Other dropdown item</Dropdown.Item>
            <Dropdown.Item active>Active dropdown item</Dropdown.Item>
            <Dropdown.Item>Other dropdown item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>With a divider</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
} 

export default DropdownExample;