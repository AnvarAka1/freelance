import React from "react";
import classes from "./Skills.module.css";
const skills = props => {
  const skillsArray = [classes.Skills];
  if (props.isClickable) {
    skillsArray.push(classes.NoMargin);
  }
  let additionalClass = null;
  const skillsList = !props.isClickable
    ? props.skills.map(skill => {
        return (
          <p key={skill.id} className={classes.Skill}>
            <span className={classes.Test}>{skill.name}</span>
          </p>
        );
      })
    : props.skills.map(skill => {
        additionalClass = skill.isSelected ? classes.Selected : null;
        return (
          <a key={skill.id} href={props.fileLink}>
            <p
              style={{
                cursor: "pointer"
              }}
              onClick={() => props.clicked(skill.id)}
              className={[classes.Skill, additionalClass].join(" ")}
            >
              <span className={classes.Test}>{skill.name}</span>
            </p>
          </a>
        );
      });
  const skillsHolder = !props.isClickable ? (
    <React.Fragment>
      <h3 className={classes.Heading}>{props.children}</h3>
      {skillsList}
    </React.Fragment>
  ) : (
    <React.Fragment>{skillsList}</React.Fragment>
  );

  return (
    <div className={skillsArray.join(" ")} style={props.skillsStyle}>
      {skillsHolder}
    </div>
  );
};
export default skills;
