import React from "react";
import Button from "../../UI/Button/Button";
import Skills from "../Skills/Skills";
import classes from "./PersonInfo.module.css";
const personInfo = props => {
  return (
    <div className={classes.PersonInfo}>
      <h3 className={classes.Name}>{props.profile.name}</h3>
      <h4 className={classes.Grey}>{props.profile.position}</h4>
      {props.onUserPage ? null : (
        <h3 className={classes.Grey}>Rating: {props.profile.rating}</h3>
      )}
      <p className={classes.Description}>{props.profile.description}</p>
      {!props.profile.skills ? (
        <Button>Edit Profile</Button>
      ) : (
        <React.Fragment>
          <Button>Invite for Project</Button>
          <Button type="white" style={{ margin: "10px 0" }}>
            Get Contact
          </Button>
          <Skills skills={props.profile.skills}>Skills</Skills>
        </React.Fragment>
      )}
    </div>
  );
};

export default personInfo;
