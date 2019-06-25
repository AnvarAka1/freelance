import React from "react";
import classes from "./Input.module.css";

const input = props => {
  let inputField;
  switch (props.input) {
    case "textarea":
      inputField = (
        <textarea
          className={classes.Textarea}
          {...props.elementConfig}
          disabled={props.disabled}
          onChange={props.inputChangedHandler}
          value={props.value}
        />
      );

      break;
    default:
      inputField = (
        <input
          className={classes.Input}
          {...props.elementConfig}
          disabled={props.disabled}
          onChange={props.inputChangedHandler}
          value={props.value}
        />
      );
      break;
  }
  return <React.Fragment>{inputField}</React.Fragment>;
};
export default input;
