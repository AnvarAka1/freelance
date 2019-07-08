import React from "react";
// import ButtonUI from "@material-ui/core/Button";
import classes from "./Button.module.css";

const button = props => {
  const { styleAttr } = props;
  let buttonHolder = !props.addProject ? (
    <button
      onClick={props.clicked}
      disabled={props.disabled}
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
    <button
      onClick={props.clicked}
      disabled={props.disabled}
      style={props.style}
    >
      {props.children}
    </button>
  );

  console.log("Style = ", styleAttr);
  return (
    <div
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
