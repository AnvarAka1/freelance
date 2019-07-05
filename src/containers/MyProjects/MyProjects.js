import React, { Component } from "react";
import Projects from "../../components/Projects/Projects";
import GridPosition from "../../components/Grid/GridPosition/GridPosition";
import axios from "axios";
class MyProjects extends Component {
  state = {
    heading: {
      name: "My projects"
    },
    projects: [
      {
        id: 1,
        project: "Akfa University",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "30.12.1997",
        grid: {
          xs: 12,
          sm: 12,
          md: 6,
          lg: 6
        }
      },
      {
        id: 2,
        project: "Inha University",
        content: "Made some projects in Inha University",
        date: "27.11.2017",
        grid: {
          xs: 12,
          sm: 12,
          md: 6,
          lg: 6
        }
      },
      {
        id: 3,
        project: "News",
        content: "News made",
        date: "29.02.2016",
        grid: {
          xs: 12,
          sm: 12,
          md: 6,
          lg: 6
        }
      },
      {
        id: 4,
        button: "+ Add a project",
        link: "/add",
        grid: {
          xs: 12,
          sm: 12,
          md: 6,
          lg: 6
        }
      }
    ]
  };
  componentDidMount() {
    axios
      .get("mp.json")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.data);
      });
  }
  jsonCreator() {
    const jsonFile = JSON.stringify(this.state);
    console.log("[MyProjects]", jsonFile);
  }
  projectHandler = (id, button) => {
    if (button) {
      this.props.history.push(
        this.state.projects[this.state.projects.length - 1].link
      );
    } else {
      const link = "/projects/" + id;
      this.props.history.push(link);
    }
  };
  render() {
    // this.jsonCreator();
    const project = (
      <Projects
        heading={this.state.heading}
        projects={this.state.projects}
        clicked={this.projectHandler}
        overflow
      />
    );
    return <GridPosition one content={project} />;
  }
}

export default MyProjects;
