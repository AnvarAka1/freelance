import React from "react";
import classes from "./TeamMembers.module.css";
import TeamMember from "./TeamMember/TeamMember";
import Paper from "../Paper/Paper";
import Heading from "../Heading/Heading";
import Grid from "../Grid/Grid";
const teamMembers = props => {
  const teamMembersList = props.members.map(member => {
    return (
      <React.Fragment key={member.id}>
        <TeamMember
          isEditable={props.isEditable}
          photo={member.photo}
          profile={member}
        />
      </React.Fragment>
    );
  });
  return (
    <Grid item xs={12}>
      <Paper type="PaperMembers">
        <Heading>Members</Heading>
        {teamMembersList}
      </Paper>
    </Grid>
  );
};

export default teamMembers;
