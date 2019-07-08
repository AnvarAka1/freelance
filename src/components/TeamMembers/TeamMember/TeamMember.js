import React from "react";
import classes from "./TeamMember.module.css";
// import Lable from "../../UI/Lable/Lable";
// import PersonPhoto from "../../Person/PersonPhoto/PersonPhoto";
import ControlButtons from "../../ControlButtons/ControlButtons";
import Person from "../../Person/Person";
import Paper from "../../Paper/Paper";
const teamMember = props => {
  const buttons = [
    {
      content: "Rate",
      clicked: props.rated,
      style: {
        color: "#777777",
        fontWeight: "normal"
      },
      hasLine: true
    },
    {
      content: "Remove",
      clicked: props.removed,
      style: {
        color: "#EA3333",
        fontWeight: "normal"
      }
    }
  ];
  const controlButtons = props.isEditable ? (
    <ControlButtons buttons={buttons} />
  ) : null;
  let members = (
    <React.Fragment>
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
    </React.Fragment>
  );
  if (props.isSeparated) {
    members = (
      <Paper autoHeight style={props.style}>
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
      </Paper>
    );
  }
  const teamMemberArray = [classes.TeamMember];
  if (props.isDivided) {
    teamMemberArray.push(classes.TeamMemberDivided);
  }
  return <div className={teamMemberArray.join(" ")}>{members}</div>;
};

export default teamMember;
