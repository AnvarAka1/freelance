import React, { Component } from "react";
import classes from "./Dashboard.module.css";
import Projects from "../../components/Projects/Projects";
import Grid from "../../components/Grid";
import GridPosition from "../../components/Grid/GridPosition/GridPosition";
class Dashboard extends Component {
  render() {
    const dashboard = <div />;
    return <GridPosition one content={dashboard} />;
  }
}

export default Dashboard;
