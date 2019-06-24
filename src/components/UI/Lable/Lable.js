import React from "react";
import classes from "./Lable.module.css";
const label = props => {
  return <p className={classes.Label}>{props.children}</p>;
};

export default label;
