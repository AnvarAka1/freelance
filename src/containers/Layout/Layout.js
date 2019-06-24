import React, { Component } from "react";
import Topbar from "../../components/Navigation/Topbar/Topbar";
import Grid from "@material-ui/core/Grid";
import Person from "../../components/Person/Person";
import Photo from "../../assets/photo.png";
import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import classes from "./Layout.module.css";
// import { Switch, Router } from "react-router-dom";
// Needs to be converted to functional component and use REDUX for handling the state
class Layout extends Component {
  state = {
    touched: false,
    drawerOpened: {
      right: false
    }
  };
  searchButtonHandler = (event, status) => {
    if (status != null) {
      this.setState({ touched: status });
    } else {
      this.setState(prevState => {
        return {
          touched: !prevState.touched
        };
      });
    }
    if (status == null && this.state.touched) {
      alert("SEARCH!");
    }
  };

  drawerToggleHandler = () => {
    this.setState(prevState => {
      return {
        ...this.state.drawerOpened,
        drawerOpened: {
          right: !prevState.drawerOpened.right
        }
      };
    });
  };
  render() {
    const crumbs = [
      {
        id: 1,
        link: "/",
        name: "Dashboard"
      },
      {
        id: 2,
        link: "/hello",
        name: "Core"
      },
      {
        id: 3,
        link: null,
        name: "Path"
      }
    ];
    return (
      <React.Fragment>
        <Topbar
          drawerOpened={this.state.drawerOpened}
          drawerToggle={this.drawerToggleHandler}
          touched={this.state.touched}
          searchButtonClicked={this.searchButtonHandler}
        />
        {/*  
          redux state => all can see public(global)
          redux state isUser=true
          // newState === oldState ? null : axios(get, ).then()
          redux state isUser=false

          userName: Anvar
          Photo: src
        */}
        <div className={classes.Padding}>
          <Grid container>
            <Grid item xs={12}>
              <BreadCrumbs crumbs={crumbs} />
            </Grid>
            <Grid item xs={2}>
              <Person isUser={true} image={Photo} />
            </Grid>
            <Grid item xs={10}>
              <main onClick={event => this.searchButtonHandler(event, false)}>
                {this.props.children}
              </main>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
export default Layout;
