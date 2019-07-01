import React from "react";
import classes from "./TeamMember.module.css";
import Lable from "../../UI/Lable/Lable";
import PersonPhoto from "../../Person/PersonPhoto/PersonPhoto";
import Heading from "../../Heading/Heading";
const teamMember = props => {
  return (
    <div className={classes.TeamMember}>
      <Heading>{props.heading}</Heading>
      <PersonPhoto src={props.image} />
    </div>
  );
};

export default teamMember;
