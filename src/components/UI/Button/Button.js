import React from "react";
// import ButtonUI from "@material-ui/core/Button";
import classes from "./Button.module.css";

const button = props => {
  return (
    <button
      onClick={props.clicked}
      className={[classes.Button, classes[props.type]].join(" ")}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default button;
