import React from "react";

const input = props => {
  let inputField;
  switch (props.input) {
    case "textarea":
      inputField = (
        <textarea
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
