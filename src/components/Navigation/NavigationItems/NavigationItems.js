import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
const navigationItems = props => {
  return (
    <ul style={{ padding: "0", margin: "0" }}>
      <NavigationItem>FEED</NavigationItem>
      <NavigationItem>FREELANCERS</NavigationItem>
      <NavigationItem>DASHBOARD</NavigationItem>
    </ul>
  );
};
export default navigationItems;
