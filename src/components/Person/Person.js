import React from "react";
import PersonPhoto from "./PersonPhoto/PersonPhoto";
import PersonInfo from "./PersonInfo/PersonInfo";
import classes from "./Person.module.css";

const person = props => {
  return (
    <div className={classes.Person}>
      <PersonPhoto image={props.image} />
      <PersonInfo />
    </div>
  );
};

export default person;
