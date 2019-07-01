import React, { Component } from "react";
import Projects from "../../components/Projects/Projects";
import Grid from "../../components/Grid/Grid";
import GridPosition from "../../components/Grid/GridPosition/GridPosition";
import classes from "./ProjectDescription.module.css";
import TeamMembers from "../../components/TeamMembers/TeamMembers";
import Photo1 from "../../assets/photo.png";
import Photo2 from "../../assets/photo1.png";
class ProjectDescription extends Component {
  state = {
    heading: {
      name: "AKFA UNIVERSITY",
      isProject: true,
      link: null
    },
    projects: {
      akfa: {
        project: "Project description",
        content:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        date: null,
        grid: {
          xs: 12
        }
      }
    },
    members: [
      {
        id: 1,
        name: "John Doe",
        position: "Front-end developer",
        photo: Photo1
      },
      {
        id: 2,
        name: "Abert Kan",
        position: "Back-end developer",
        photo: Photo2
      },
      {
        id: 3,
        name: "Jessica Pearson",
        position: "UI/UX Designer",
        photo: Photo1
      }
    ]
  };
  render() {
    const projects = (
      <React.Fragment>
        <Projects heading={this.state.heading} projects={this.state.projects} />
        <TeamMembers isEditable members={this.state.members} />
      </React.Fragment>
    );

    return <GridPosition two content={projects} addContent={null} />;
  }
}

export default ProjectDescription;
