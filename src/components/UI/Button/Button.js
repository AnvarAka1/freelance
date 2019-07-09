import React from "react";
// import ButtonUI from "@material-ui/core/Button";
import classes from "./Button.module.css";

const button = props => {
  let buttonHolder = !props.addProject ? (
    <button
      onClick={props.clicked}
      disabled={props.disabled}
      className={[
        classes.ButtonWrapper,
        classes[props.type],
        classes[props.addClass],
        props.active ? classes.Active : null
      ].join(" ")}
      style={props.style}
    >
      {props.children}
    </button>
  ) : (
    <button
      onClick={props.clicked}
      disabled={props.disabled}
      style={props.style}
      className={props.active ? classes.Active : null}
    >
      {props.children}
    </button>
  );

  return (
    <div
      style={{
        width: props.width,
        height: props.height
      }}
      className={[
        classes.Button,
        classes[props.container],
        props.addProject ? classes.AddProject : null
      ].join(" ")}
    >
      {buttonHolder}
    </div>
  );
};

export default button;
