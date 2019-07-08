import React from "react";
import classes from "./Paper.module.css";

const paper = props => {
  const classArray = [classes.Paper, classes[props.type]];
  if (props.loading) {
    classArray.push(classes.Loading);
  }
  if (props.noHover) {
    classArray.push(classes.NoHover);
  }
  if (props.noPadding) {
    classArray.push(classes.NoPadding);
  }
  const autoHeight = props.autoHeight ? { height: "auto" } : null;
  const style = { ...autoHeight, ...props.style };
  return (
    <div className={classArray.join(" ")} style={style}>
      {props.children}
    </div>
  );
};

export default paper;
