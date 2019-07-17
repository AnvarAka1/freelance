import React, { Component } from "react";
import Projects from "../../components/Projects/Projects";
// import Grid from "../../components/Grid/Grid";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Skills from "../../components/Person/Skills/Skills";
import Heading from "../../components/Heading/Heading";
import Paper from "../../components/Paper/Paper";
import GridPosition from "../../components/Grid/GridPosition/GridPosition";
import Grid from "../../components/Grid/Grid";
import Photo1 from "../../assets/photo.png";
import Photo2 from "../../assets/photo1.png";
import TeamMembers from "../../components/TeamMembers/TeamMembers";
class FreelancerProject extends Component {
  state = {
    heading: {
      name: "AKFA UNIVERSITY",
      isProject: true,
      link: null
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
    isUserShown: false
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
    this.props.history.push(`/freelancers/${id}`);
  };

  render() {
    this.user();
    const projects = (
      <React.Fragment>
        <Projects
          clicked={() => {
            return null;
          }}
          projects={this.state.projects}
          autoHeightLable
          autoHeight
          noHover
        />
      </React.Fragment>
    );
    const addContent = (
      <React.Fragment>
        <Paper autoHeight noHover>
          <Heading>Used Technologies</Heading>
          <Skills skills={this.state.skills} />
        </Paper>
        <Paper autoHeight noHover>
          <TeamMembers
            nopadding
            // isSeparated
            clicked={this.memberHandler}
            heading="Team"
            members={this.state.members}
            isDivided
          />
        </Paper>
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Heading {...this.state.heading}>{this.state.heading.name}</Heading>
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
)(FreelancerProject);
