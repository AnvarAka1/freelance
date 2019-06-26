import React from "react";
import classes from "./Lable.module.css";
const lable = props => {
  return <p className={classes.Lable}>{props.children}</p>;
};

export default lable;
