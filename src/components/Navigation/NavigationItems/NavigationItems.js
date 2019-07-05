import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";
const navigationItems = props => {
  const navigationItemsClass = [classes.NavigationItems];
  if (props.sideDrawer) {
    navigationItemsClass.push(classes.UlSideDrawer);
  }

  const navigationList = [
    { name: "FEED", link: "/feed" },
    { name: "FREELANCERS", link: "/freelancers" },
    { name: "DASHBOARD", link: "/dashboard" }
  ].map(navigation => {
    return (
      <NavigationItem
        sideDrawer={props.sideDrawer}
        key={navigation.name}
        link={navigation.link}
      >
        {navigation.name}
      </NavigationItem>
    );
  });
  return <ul className={navigationItemsClass.join(" ")}>{navigationList}</ul>;
};
export default navigationItems;
