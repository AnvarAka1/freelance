import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";
const navigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem>FEED</NavigationItem>
      <NavigationItem>FREELANCERS</NavigationItem>
      <NavigationItem>DASHBOARD</NavigationItem>
    </ul>
  );
};
export default navigationItems;
