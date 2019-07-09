import React from "react";
import classes from "./Lable.module.css";
const lable = props => {
  const classLableArray = [classes.Lable];
  if (props.project && !props.autoHeightLable) {
    classLableArray.push(classes.LableOverflow);
  }
  return (
    <p style={props.style} className={classLableArray.join(" ")}>
      {props.children}
    </p>
  );
};

export default lable;
