import React from "react";
import Project from "./Project/Project";
// import classes from "./Projects.module.css";
import Heading from "../Heading/Heading";
import Grid from "../Grid/Grid";
const projects = props => {
  const projects = props.projects.map(project => {
    return (
      <Grid
        item
        key={project.id}
        onClick={() => props.clicked(project.id, project.button)}
        {...project.grid}
      >
        <Project
          small={props.small}
          noHover={props.noHover}
          autoHeightLable={props.autoHeightLable}
          overflow={props.overflow}
          subHeading={project.subHeading}
          project={project.project}
          content={project.content}
          isActiveState={project.isActive}
          skills={project.skills}
          date={project.date}
          viewed={project.viewed}
          addProject={project.button}
          autoHeight={props.autoHeight}
          paperStyle={props.paperStyle}
          skillsStyle={props.skillsStyle}
          clicked={() => {
            return null;
          }}
        />
      </Grid>
    );
  });
  return (
    <React.Fragment>
      <Grid item xs={12}>
        {props.heading ? (
          <Heading {...props.heading} big>
            {props.heading.name}
          </Heading>
        ) : null}
      </Grid>
      {projects}
    </React.Fragment>
  );
};

export default projects;
