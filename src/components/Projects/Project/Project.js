import React from "react";
import Paper from "../../Paper/Paper";
import Lable from "../../UI/Lable/Lable";
// import classes from "./Project.module.css";
import Heading from "../../Heading/Heading";
import Skills from "../../Person/Skills/Skills";
import Button from "../../UI/Button/Button";
const project = props => {
  let proj = (
    <div>
      <Heading {...props} date={props.date}>
        {props.project}
      </Heading>
      <Lable {...props}>{props.content}</Lable>
      {props.skills ? (
        <React.Fragment>
          <Heading style={{ marginTop: "15px" }} small>
            Required skills
          </Heading>
          <Skills skills={props.skills} skillsStyle={props.skillsStyle} />
        </React.Fragment>
      ) : null}
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

  return (
    <Paper
      noHover={props.noHover}
      style={props.paperStyle}
      autoHeight={props.autoHeight}
    >
      {proj}
    </Paper>
  );
};

export default project;
