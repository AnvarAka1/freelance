import React from "react";
// import ButtonUI from "@material-ui/core/Button";
import classes from "./Button.module.css";

const button = props => {
  let buttonHolder = !props.addProject ? (
    <button
      onClick={props.clicked}
      className={[
        classes.ButtonWrapper,
        classes[props.type],
        classes[props.addClass]
      ].join(" ")}
      style={props.style}
    >
      {props.children}
    </button>
  ) : (
    <button onClick={props.clicked} style={props.style}>
      {props.children}
    </button>
  );

  return (
    <div
      className={[
        classes.Button,
        props.addProject ? classes.AddProject : null
      ].join(" ")}
    >
      {buttonHolder}
    </div>
  );
};

export default button;
