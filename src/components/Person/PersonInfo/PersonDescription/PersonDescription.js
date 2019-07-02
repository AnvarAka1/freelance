import React from "react";
import classes from "./PersonDescription.module.css";
const personDescription = props => {
  return (
    <div className={classes.PersonDescription}>
      <p className={classes.Description}>{props.description}</p>
    </div>
  );
};

export default personDescription;
