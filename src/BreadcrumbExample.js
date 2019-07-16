import React from "react";
import { Breadcrumb } from "rbx";
import "rbx/index.css";

const BreadcrumbExample = () => {
  return (
    <Breadcrumb align={null} separator={"arrow"} size={"large"}>
      <Breadcrumb.Item>rbx</Breadcrumb.Item>
      <Breadcrumb.Item>Documentation</Breadcrumb.Item>
      <Breadcrumb.Item>Components</Breadcrumb.Item>
      <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>
  );
} 

export default BreadcrumbExample;