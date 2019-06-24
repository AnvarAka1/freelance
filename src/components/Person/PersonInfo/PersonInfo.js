import React from "react";
import Button from "../../UI/Button/Button";
import Skills from "../Skills/Skills";
import classes from "./PersonInfo.module.css";
const personInfo = props => {
  const skills = [
    {
      id: 1,
      name: "Web-development"
    },
    {
      id: 2,
      name: "Front-end"
    },
    {
      id: 3,
      name: "Back-end"
    },
    {
      id: 4,
      name: "Design"
    },
    {
      id: 5,
      name: "UI/UX"
    },
    {
      id: 6,
      name: "Mobile Applications"
    },
    {
      id: 7,
      name: "iOS"
    }
  ];
  return (
    <div className={classes.PersonInfo}>
      <h3 className={classes.Name}>John Doe</h3>
      <h4 className={classes.Grey}>Unitel Ltd. / Manager</h4>
      {props.onUserPage ? null : (
        <h3 className={classes.Grey}>Rating: 4.5/5.0</h3>
      )}
      <p className={classes.Description}>
        This job entailed communicating with various consumers, giving solid
        information about company
      </p>
      {props.onUserPage ? (
        <Button>Edit Profile</Button>
      ) : (
        <React.Fragment>
          <Button>Invite for Project</Button>
          <Button type="white" style={{ margin: "10px 0" }}>
            Get Contact
          </Button>
          <Skills skills={skills}>Skills</Skills>
        </React.Fragment>
      )}
    </div>
  );
};

export default personInfo;
