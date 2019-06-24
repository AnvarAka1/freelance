import React from "react";
import Input from "../Input/Input";
import Label from "../Lable/Lable";
import classes from "./InputLable.module.css";
const inputLabel = props => {
  return (
    <div className={classes.InputLabel}>
      <Label>{props.label}</Label>
      <Input {...props} />
    </div>
  );
};

export default inputLabel;
