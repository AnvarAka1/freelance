import React from "react";
// import classes from "./TeamMembers.module.css";
import TeamMember from "./TeamMember/TeamMember";
import Paper from "../Paper/Paper";
import Heading from "../Heading/Heading";
import Grid from "../Grid/Grid";
import Button from "../UI/Button/Button";
import classes from "./TeamMembers.module.css";
import Spinner from "../UI/Spinner/Spinner";
const teamMembers = props => {
  // const memberHandler = id => {
  //   console.log("[TeamMembers] Member clicked with id =", id);
  // };
  let teamMembersList;
  if (props.members) {
    teamMembersList = props.members.map(member => {
      return (
        <React.Fragment key={member.id}>
          <TeamMember
            isEditable={props.isEditable}
            photo={member.photo}
            profile={member}
            info={props.info}
            // clicked={() => memberHandler(member.id)}
            clicked={() => props.memberhandler(member.id)}
          />
        </React.Fragment>
      );
    });
  }
  return (
    <Grid item xs={12}>
      <Heading>Members</Heading>
      <Paper type="PaperMembers">
        {props.loading ? <Spinner /> : teamMembersList}
      </Paper>
      {props.showbutton ? (
        <div className={classes.Center}>
          <Button type="disabled" container="Center">
            Load More
          </Button>
        </div>
      ) : null}
    </Grid>
  );
};

export default teamMembers;
