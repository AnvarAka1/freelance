import React from "react";
import classes from "./Input.module.css";

const input = props => {
  let inputField;
  switch (props.input) {
    case "input":
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
    case "file":
      inputField = (
        <input
          className={[classes.Input, classes.FileInput].join(" ")}
          {...props.elementConfig}
          disabled={props.disabled}
          onChange={props.inputChangedHandler}
          value={props.value}
        />
      );
      break;
    case "date":
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
    case "select":
      const options = props.elementConfig.options.map(option => {
        return <option>{option}</option>;
      });
      inputField = (
        <select
          className={classes.Input}
          {...props.elementConfig}
          disabled={props.disabled}
          onChange={props.inputChangedHandler}
          value={props.value}
        >
          {options}
        </select>
      );
      break;
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
      inputField = null;
      break;
  }
  return <React.Fragment>{inputField}</React.Fragment>;
};
export default input;
