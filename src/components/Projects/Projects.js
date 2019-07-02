import React from "react";
import Project from "./Project/Project";
// import classes from "./Projects.module.css";
import Heading from "../Heading/Heading";
import Grid from "../Grid/Grid";
const projects = props => {
  const projectsArray = [];
  for (let key in props.projects) {
    projectsArray.push({ id: key, projectInfo: props.projects[key] });
  }
  const projects = projectsArray.map(project => {
    return (
      <Grid item key={project.id} {...project.projectInfo.grid}>
        <Project
          overflow={props.overflow}
          project={project.projectInfo.project}
          content={project.projectInfo.content}
          date={project.projectInfo.date}
          addProject={project.projectInfo.button}
          clicked={props.clicked}
        />
      </Grid>
    );
  });
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Heading {...props.heading} big>
          {props.heading.name}
        </Heading>
      </Grid>
      {projects}
    </React.Fragment>
  );
};

export default projects;
