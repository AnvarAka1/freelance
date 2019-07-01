import React from "react";
import Paper from "../../Paper/Paper";
import Lable from "../../UI/Lable/Lable";
// import classes from "./Project.module.css";
import Heading from "../../Heading/Heading";
import Button from "../../UI/Button/Button";
const project = props => {
  let proj = (
    <React.Fragment>
      <Heading {...props} date={props.date}>
        {props.project}
      </Heading>
      <Lable {...props}>{props.content}</Lable>
    </React.Fragment>
  );

  if (props.addProject) {
    proj = (
      <React.Fragment>
        <Button clicked={props.clicked} addProject={props.addProject}>
          {props.addProject}
        </Button>
      </React.Fragment>
    );
  }
  return <Paper>{proj}</Paper>;
};

export default project;
