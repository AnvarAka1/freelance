import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Logo from "../../UI/Logo/Logo";
import SearchField from "../SearchField/SearchField";
// import classes from "./Topbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
const topbar = props => {
  return (
    <React.Fragment>
      <AppBar position="static" color="white">
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item lg={2} md={3} sm={4} xs={4}>
              <Logo />
            </Grid>
            <Grid item xs={4}>
              <NavigationItems />
            </Grid>
            <Grid>
              <SearchField />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default topbar;
