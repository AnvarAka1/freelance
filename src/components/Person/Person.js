import React from "react";
import PersonPhoto from "./PersonPhoto/PersonPhoto";
import PersonInfo from "./PersonInfo/PersonInfo";
import classes from "./Person.module.css";
import Skills from "./Skills/Skills";
import PersonDescription from "./PersonInfo/PersonDescription/PersonDescription";
const person = props => {
  console.log("[Person.js] info =", props.info);
  const description = props.info ? (
    <div>
      <PersonDescription description={props.profile.description} />
      <Skills skills={props.profile.skills} />
    </div>
  ) : null;
  return (
    <div className={classes.Person}>
      <div className={classes[props.type]}>
        <PersonPhoto
          circle={props.circle}
          image={props.profile.photo}
          team={props.team}
          info={props.info}
        />
        <PersonInfo
          profile={props.profile}
          team={props.team}
          info={props.info}
        />
      </div>
      {description}
    </div>
  );
};

export default person;
