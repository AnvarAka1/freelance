import React from "react";
import PersonPhoto from "./PersonPhoto/PersonPhoto";
import classes from "./Person.module.css";

const person = props => {
  return (
    <div className={classes.Person}>
      <PersonPhoto image={props.image} />
      Hello
    </div>
  );
};
export default person;
