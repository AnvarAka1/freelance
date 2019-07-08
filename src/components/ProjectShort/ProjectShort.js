import React from "react";

import classes from "./ProjectShort.module.css";
import Skills from "../Person/Skills/Skills";
import Button from "../UI/Button/Button";
import Paper from "../Paper/Paper";
const projectShort = props => {
  return (
    <Paper noHover autoHeight>
      <Skills skills={props.skills}>Skills</Skills>

      <Button>Edit Project</Button>
    </Paper>
  );
};

export default projectShort;
