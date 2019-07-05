import React from "react";
import PersonPhoto from "./PersonPhoto/PersonPhoto";
import PersonInfo from "./PersonInfo/PersonInfo";
import classes from "./Person.module.css";
import Skills from "./Skills/Skills";
import PersonDescription from "./PersonInfo/PersonDescription/PersonDescription";
const person = props => {
  const description = props.info ? (
    <div>
      <PersonDescription description={props.profile.description} />
      <Skills skills={props.profile.skills} />
    </div>
  ) : null;
  return (
    <div className={classes.Person}>
      <div onClick={props.clicked} className={classes[props.type]}>
        <PersonPhoto
          circle={props.circle}
          image={props.profile.photo}
          team={props.team}
          info={props.info}
          loading={props.loading}
        />
        <PersonInfo
          profile={props.profile}
          team={props.team}
          info={props.info}
          editClicked={props.editClicked}
          inviteClicked={props.inviteClicked}
          contactClicked={props.contactClicked}
        />
      </div>
      {description}
    </div>
  );
};

export default person;
