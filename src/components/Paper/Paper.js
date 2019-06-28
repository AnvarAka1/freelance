import React from "react";
import classes from "./Paper.module.css";

const paper = props => {
  return <div className={classes.Paper}> {props.children}</div>;
};

export default paper;
