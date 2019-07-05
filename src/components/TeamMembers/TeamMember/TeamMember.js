import React from "react";
import classes from "./TeamMember.module.css";
// import Lable from "../../UI/Lable/Lable";
// import PersonPhoto from "../../Person/PersonPhoto/PersonPhoto";
import ControlButtons from "../../ControlButtons/ControlButtons";
import Person from "../../Person/Person";
const teamMember = props => {
  const buttons = [
    {
      content: "Rate",
      clicked: props.rated,
      style: {
        color: "#777777"
      }
    },
    {
      content: "Remove",
      clicked: props.removed,
      style: "#EA3333"
    }
  ];
  const controlButtons = props.isEditable ? (
    <ControlButtons buttons={buttons} />
  ) : null;
  return (
    <div className={classes.TeamMember}>
      <Person
        type="Inline"
        photo={props.photo}
        profile={props.profile}
        circle
        team
        info={props.info}
        clicked={props.clicked}
      />
      {controlButtons}
    </div>
  );
};

export default teamMember;
