import React, { Component } from "react";
// import classes from "./Dashboard.module.css";
import Projects from "../../components/Projects/Projects";
// import Grid from "../../components/Grid/Grid";
import GridPosition from "../../components/Grid/GridPosition/GridPosition";
import axios from "axios";
class Dashboard extends Component {
  state = {
    menus: [
      {
        id: 1,
        button: "Projects",
        link: "/Projects",
        grid: {
          xs: 12,
          sm: 12,
          md: 6,
          lg: 6
        }
      },
      {
        id: 2,
        button: "Messages",
        link: "/Messages",
        grid: {
          xs: 12,
          sm: 12,
          md: 6,
          lg: 6
        }
      },
      {
        id: 3,
        button: "Notifications",
        link: "/Notifications",
        grid: {
          xs: 12,
          sm: 12,
          md: 6,
          lg: 6
        }
      },
      {
        id: 4,
        button: "Settings",
        link: "/Settings",
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
      .get("db.json")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.data);
      });
  }
  jsonCreator() {
    const jsonFile = JSON.stringify(this.state);
    console.log("[Dashboard]", jsonFile);
  }

  routeHandler = id => {
    const menus = [];
    for (let key in this.state.menus) {
      menus.push({
        id: this.state.menus[key].id,
        config: this.state.menus[key]
      });
    }
    menus.map(menu => {
      if (menu.id === id) {
        console.log(id);
        console.log("Menu ", menu.config.link);
        this.props.history.push(menu.config.link);
      }
    });
  };
  render() {
    // this.jsonCreator();
    const dashboard = (
      <Projects
        projects={this.state.menus}
        clicked={this.routeHandler}
        overflow
      />
    );
    return <GridPosition one content={dashboard} />;
  }
}

export default Dashboard;
