import React from "react";
import classes from "./Paper.module.css";

const paper = props => {
  return (
    <div className={[classes.Paper, classes[props.type]]}>
      {" "}
      {props.children}
    </div>
  );
};

export default paper;
