import React from "react";
import PersonPhoto from "./PersonPhoto/PersonPhoto";
import PersonInfo from "./PersonInfo/PersonInfo";
import classes from "./Person.module.css";

const person = props => {
  return (
    <div className={[classes.Person, classes[props.type]].join(" ")}>
      <PersonPhoto
        circle={props.circle}
        image={props.profile.photo}
        team={props.team}
      />
      <PersonInfo profile={props.profile} team={props.team} />
    </div>
  );
};

export default person;
