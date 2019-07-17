import React from "react";
// import classes from "./TeamMembers.module.css";
import TeamMember from "./TeamMember/TeamMember";
import Paper from "../Paper/Paper";
import Heading from "../Heading/Heading";
import Grid from "../Grid/Grid";
import Button from "../UI/Button/Button";
import classes from "./TeamMembers.module.css";

const teamMembers = props => {
  let teamMembersList;
  if (props.members) {
    teamMembersList = props.members.map(member => {
      return (
        <React.Fragment key={member.id}>
          <TeamMember
            style={props.style}
            isDivided={props.isDivided}
            isSeparated={props.isSeparated}
            isEditable={props.isEditable}
            photo={member.photo}
            profile={member}
            info={props.info}
            // clicked={() => memberHandler(member.id)}
            clicked={() => props.clicked(member.id)}
          />
        </React.Fragment>
      );
    });
  }
  return (
    <Grid item xs={12} nopadding={props.nopadding}>
      {props.heading ? <Heading>{props.heading}</Heading> : null}
      {props.isPaper ? (
        <Paper
          noHover={props.noHover}
          noPadding={props.noPadding}
          type="PaperMembers"
          loading={props.loading}
        >
          {teamMembersList}
        </Paper>
      ) : (
        <div>{teamMembersList}</div>
      )}

      {props.showbutton ? (
        <div className={classes.Center}>
          <Button
            type="disabled"
            container="Center"
            clicked={props.loadMoreClicked}
          >
            Load More
          </Button>
        </div>
      ) : null}
    </Grid>
  );
};

export default teamMembers;
