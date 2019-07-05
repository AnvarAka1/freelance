import React from "react";
import Button from "../../UI/Button/Button";
import PersonDescription from "./PersonDescription/PersonDescription";
import Skills from "../Skills/Skills";
import classes from "./PersonInfo.module.css";
const personInfo = props => {
  const personInfoClasses = [classes.PersonInfo];
  let person = null;
  if (props.team && !props.info) {
    personInfoClasses.push(classes.Inline);
    person = (
      <div className={classes.NoMargin}>
        <h3 className={classes.Name}>{props.profile.name}</h3>
        <h4 className={classes.Grey}>{props.profile.position}</h4>
      </div>
    );
  } else if (props.profile.skills && !props.info) {
    person = (
      <React.Fragment>
        <h3 className={classes.Name}>{props.profile.name}</h3>
        <h4 className={classes.Grey}>{props.profile.position}</h4>
        <h3 className={classes.Grey}>Rating: {props.profile.rating}</h3>
        <PersonDescription description={props.profile.description} />
        <Button clicked={props.inviteClicked}>Invite for Project</Button>
        <Button
          clicked={props.contactClicked}
          type="white"
          style={{ margin: "10px 0" }}
        >
          Get Contact
        </Button>
        <Skills skills={props.profile.skills}>Skills</Skills>
      </React.Fragment>
    );
  } else if (!props.profile.skills) {
    person = (
      <React.Fragment>
        <h3 className={classes.Name}>{props.profile.name}</h3>
        <h4 className={classes.Grey}>{props.profile.position}</h4>
        <PersonDescription description={props.profile.description} />
        <Button clicked={props.editClicked}>Edit Profile</Button>
      </React.Fragment>
    );
  } else if (props.profile.skills && props.info) {
    personInfoClasses.push(classes.Inline);
    person = (
      <React.Fragment>
        <div className={classes.Info}>
          <h3 className={classes.Name}>{props.profile.name}</h3>
          <h4 className={classes.Grey}>{props.profile.position}</h4>
          <h3 className={classes.Grey}>Rating: {props.profile.rating}</h3>
        </div>
      </React.Fragment>
    );
  }
  return <div className={personInfoClasses.join(" ")}>{person}</div>;
};

export default personInfo;
