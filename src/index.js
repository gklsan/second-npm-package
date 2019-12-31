import React from "react";

const MyReactApp = props => {
  const { width, height, bgColor, content } = props;
  return React.createElement('div', null, "Hello")
};

export default MyReactApp;
