import React from "react";
import ShortProjectDescription from "../ShortProjectDescription/ShortProjectDescription";
// import classes from "./ProjectShort.module.css";
import Skills from "../Person/Skills/Skills";
import Button from "../UI/Button/Button";
import Paper from "../Paper/Paper";

const projectShort = props => {
  return (
    <Paper noHover autoHeight>
      <Skills skills={props.skills}>Skills</Skills>
      <ShortProjectDescription info={props.info} />
      <Button>Edit Project</Button>
    </Paper>
  );
};

export default projectShort;
