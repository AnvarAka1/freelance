import React from "react";
import classes from "./Skills.module.css";
const skills = props => {
  const skillsList = props.skills.map(skill => {
    return (
      <p key={skill.id} className={classes.Skill}>
        <span className={classes.Test}>{skill.name}</span>
      </p>
    );
  });
  return (
    <div className={classes.Skills}>
      <h3 className={classes.Heading}>{props.children}</h3>
      {skillsList}
    </div>
  );
};
export default skills;
