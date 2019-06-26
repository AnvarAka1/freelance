import React from "react";
// import ButtonUI from "@material-ui/core/Button";
import classes from "./Button.module.css";

const button = props => {
  return (
    <div className={classes.Button}>
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
    </div>
  );
};

export default button;
