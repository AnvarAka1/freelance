import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
const navigationItem = props => {
  const navigationClass = [classes.NavigationItem];
  props.sideDrawer
    ? navigationClass.push(classes.LiSideDrawer)
    : navigationClass.push(classes.Li);

  return (
    <li className={navigationClass.join(" ")}>
      <NavLink to={props.link} activeClassName={classes.Active}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
