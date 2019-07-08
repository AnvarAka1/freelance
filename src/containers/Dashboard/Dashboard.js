import React, { Component } from "react";
// import classes from "./Dashboard.module.css";
import Projects from "../../components/Projects/Projects";
// import Grid from "../../components/Grid/Grid";
import GridPosition from "../../components/Grid/GridPosition/GridPosition";
import axios from "axios";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
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
    ],
    isUser: true,
    shouldChange: false
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
    if (this.state.shouldChange) {
      // axios.get(user)
      this.setState({ shouldChange: false });
    }
  }

  user() {
    console.log("isUser = ", this.props.isUser);

    if (this.state.isUser !== this.props.isUser) {
      this.props.onUserChanged();
      this.setState({ shouldChange: true });
    }
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
      return true;
    });
  };
  render() {
    this.user();
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
const mapStateToProps = state => {
  return {
    isUser: state.user.isUser
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
)(Dashboard);
