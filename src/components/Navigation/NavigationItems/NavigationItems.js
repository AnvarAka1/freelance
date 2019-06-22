import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";
const navigationItems = props => {
  const navigationItemsClass = [classes.NavigationItems];
  if (props.sideDrawer) {
    navigationItemsClass.push(classes.UlSideDrawer);
  }

  const navigationList = ["FEED", "FREELANCERS", "DASHBOARD"].map(
    navigation => {
      return (
        <NavigationItem sideDrawer={props.sideDrawer} key={navigation} link="/">
          {navigation}
        </NavigationItem>
      );
    }
  );
  return <ul className={navigationItemsClass.join(" ")}>{navigationList}</ul>;
};
export default navigationItems;
