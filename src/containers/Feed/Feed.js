import React, { Component } from "react";
import Projects from "../../components/Projects/Projects";
import Grid from "../../components/Grid/Grid";
import AsideFilter from "../../components/AsideFilter/AsideFilter";
import GridPosition from "../../components/Grid/GridPosition/GridPosition";
class Feed extends Component {
  state = {
    projects: [
      {
        id: 1,
        project: "Нужен веб-разработчик для создания Лендинг страницы",
        subHeading: {
          name: "Project",
          price: 200,
          level: "High-level"
        },
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est...",
        date: "Today",
        viewed: 24,
        isActive: true,
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
          }
        ]
      },
      {
        id: 2,
        project: "Нужен дизайнер для создания Лендинг страницы",
        subHeading: {
          name: "Project",
          price: 100,
          level: "Low-level"
        },
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est...",
        date: "Yesterday",
        viewed: 104,
        isActive: false,
        skills: [
          {
            id: 1,
            name: "Web-development"
          },
          {
            id: 4,
            name: "Design"
          },
          {
            id: 5,
            name: "UI/UX"
          }
        ]
      }
    ],
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
    ]
  };
  filterHandler = id => {
    let skills = this.state.skills.slice();
    let indexFound;
    skills.find((element, index) => {
      indexFound = index;
      return id === element.id;
    });
    skills[indexFound].isSelected = !skills[indexFound].isSelected;
    this.setState({ skills: skills });
  };
  projectHandler = id => {
    this.props.history.push(`/feed/${id}`);
  };
  render() {
    const content = (
      <Projects
        small
        projects={this.state.projects}
        clicked={this.projectHandler}
        paperStyle={{ height: "230px" }}
        skillsStyle={{ marginTop: "0" }}
      />
    );
    const addContent = (
      <AsideFilter
        filter={this.state.skills}
        filterHandler={this.filterHandler}
      />
    );
    return (
      <GridPosition
        content={content}
        addContent={addContent}
        two
        center={{ xs: 9 }}
        right={{ xs: 3 }}
      />
    );
  }
}

export default Feed;
