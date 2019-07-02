import React, { Component } from "react";
import Projects from "../../components/Projects/Projects";
import GridPosition from "../../components/Grid/GridPosition/GridPosition";
class MyProjects extends Component {
  state = {
    heading: {
      name: "My projects"
    },

    projects: {
      akfa: {
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
      inha: {
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
      news: {
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
      add: {
        button: "+ Add a project",
        grid: {
          xs: 12,
          sm: 12,
          md: 6,
          lg: 6
        }
      }
    }
  };
  addProjectHandler = () => {
    console.log("[MyProjects] Clicked!");
  };
  render() {
    const project = (
      <Projects
        heading={this.state.heading}
        projects={this.state.projects}
        clicked={this.addProjectHandler}
        overflow
      />
    );
    return <GridPosition one content={project} />;
  }
}

export default MyProjects;
