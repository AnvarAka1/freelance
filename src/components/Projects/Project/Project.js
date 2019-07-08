import React from "react";
import Paper from "../../Paper/Paper";
import Lable from "../../UI/Lable/Lable";
// import classes from "./Project.module.css";
import Heading from "../../Heading/Heading";
import Button from "../../UI/Button/Button";
const project = props => {
  let proj = (
    <div>
      <Heading {...props} date={props.date}>
        {props.project}
      </Heading>
      <Lable {...props}>{props.content}</Lable>
    </div>
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
  console.log("AUTOHEIGHT, ", props.autoHeight);
  return (
    <Paper noHover={props.noHover} autoHeight={props.autoHeight}>
      {proj}
    </Paper>
  );
};

export default project;
