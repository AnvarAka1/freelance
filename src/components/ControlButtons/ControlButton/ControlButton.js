import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./ControlButton.module.css";
const controlButton = props => {
  return (
    <Button addProject clicked={props.clicked} style={props.style}>
      {props.children}
    </Button>
  );
};

export default controlButton;
