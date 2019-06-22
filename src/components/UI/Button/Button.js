import React from "react";
import ButtonUI from "@material-ui/core/Button";

import classes from "./Button.module.css";

const button = props => {
  return <ButtonUI className={classes.Button}>{props.children}</ButtonUI>;
};

export default button;
