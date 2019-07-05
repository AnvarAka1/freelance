import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Logo from "../../UI/Logo/Logo";
import SearchField from "../SearchField/SearchField";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Hidden from "@material-ui/core/Hidden";
import classes from "./Topbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import NotificationItems from "../NotificationItems/NotificationItems";

// import SideDrawer from "../SideDrawer/SideDrawer";
import Drawer from "@material-ui/core/Drawer";
const topbar = props => {
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={props.drawerOpened.right}
        onClose={props.drawerToggle}
      >
        <NavigationItems sideDrawer />
      </Drawer>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item lg={2} md={3} sm={3} xs={3}>
              <Logo />
            </Grid>
            <Hidden smDown>
              <Grid item lg={5} md={4} sm={4}>
                <NavigationItems />
              </Grid>
            </Hidden>
            <Grid item lg={3} md={2} sm={5} xs={4}>
              <SearchField
                touched={props.touched}
                search={props.searchButtonClicked}
              />
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={2}>
              <NotificationItems
                photo={props.profilePhoto}
                alt={props.alt}
                loading={props.loading}
              />
            </Grid>

            <Hidden mdUp>
              <Grid item sm={1} xs={3}>
                <div className={classes.IconButton}>
                  <IconButton onClick={props.drawerToggle}>
                    <Icon>dehaze</Icon>
                  </IconButton>
                </div>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default topbar;
