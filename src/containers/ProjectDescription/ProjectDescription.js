import React, { Component } from "react";
import Projects from "../../components/Projects/Projects";
// import Grid from "../../components/Grid/Grid";
import GridPosition from "../../components/Grid/GridPosition/GridPosition";
// import classes from "./ProjectDescription.module.css";
import TeamMembers from "../../components/TeamMembers/TeamMembers";
import Photo1 from "../../assets/photo.png";
import Photo2 from "../../assets/photo1.png";
import * as actions from "../../store/actions/index";
import ProjectShort from "../../components/ProjectShort/ProjectShort";
import Heading from "../../components/Heading/Heading";
import { connect } from "react-redux";
import Grid from "../../components/Grid/Grid";
import Details from "../../components/Details/Details";
class ProjectDescription extends Component {
  state = {
    heading: {
      name: "AKFA UNIVERSITY",
      isProject: true,
      link: null
    },
    shortProjectInfo: {
      price: "$200",
      level: "High-level",
      positions: ["Front-end developer", "Back-end developer", "Designer"],
      file: [
        {
          id: 1,
          name: "Assets.zip"
        }
      ]
    },
    details: {
      number: "KM-000001",
      payment: false,
      status: true
    },
    skills: [
      {
        id: 1,
        name: "Web-development"
      },
      {
        id: 2,
        name: "Front-end"
      },
      {
        id: 3,
        name: "Back-end"
      },
      {
        id: 4,
        name: "Design"
      },
      {
        id: 5,
        name: "UI/UX"
      },
      {
        id: 6,
        name: "Mobile Applications"
      },
      {
        id: 7,
        name: "iOS"
      }
    ],
    projects: [
      {
        id: 3,
        project: "Project description",
        content:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        date: null,
        grid: {
          xs: 12
        }
      }
    ],
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
    ],
    isUserShown: true,
    shouldChange: false
  };
  componentDidMount() {
    if (this.state.shouldChange) {
      // axios.get(user)
      this.setState({ shouldChange: false });
    }
  }
  user() {
    console.log("isUserShown = ", this.props.isUserShown);

    if (this.state.isUserShown !== this.props.isUserShown) {
      this.props.onUserChanged();
      this.setState({ shouldChange: true });
    }
  }
  jsonCreator() {
    const jsonFile = JSON.stringify(this.state);
    console.log("[ProjectDescription]", jsonFile);
  }

  memberHandler = id => {
    console.log("[Project Description] Member clicked with id =", id);
  };

  render() {
    this.user();
    const projects = (
      <React.Fragment>
        <Projects
          autoHeight
          autoHeightLable
          noHover
          clicked={() => {
            return;
          }}
          projects={this.state.projects}
        />
        <TeamMembers
          // isPaper
          heading="Members"
          style={{
            marginBottom: "10px",
            padding: "10px 25px 10px 15px"
          }}
          isSeparated
          isEditable
          clicked={this.memberHandler}
          members={this.state.members}
        />
      </React.Fragment>
    );
    const addContent = (
      <React.Fragment>
        <ProjectShort
          skills={this.state.skills}
          info={this.state.shortProjectInfo}
        />
        <Details details={this.state.details} />
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Heading isProject {...this.state.heading}>
            {this.state.heading.name}
          </Heading>
        </Grid>
        <GridPosition two content={projects} addContent={addContent} />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    isUserShown: state.user.isUserShown
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onUserChanged: () => dispatch(actions.userChanged())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDescription);
