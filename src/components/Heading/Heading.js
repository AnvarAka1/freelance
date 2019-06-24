import React from "react";
import classes from "./Heading.module.css";

const heading = props => {
  return (
    <div className={classes.Heading}>
      <h1>{props.children}</h1>
      {props.project ? <p>project</p> : null}
      {props.link ? <a href="/">{props.link}</a> : null}
    </div>
  );
};

export default heading;
