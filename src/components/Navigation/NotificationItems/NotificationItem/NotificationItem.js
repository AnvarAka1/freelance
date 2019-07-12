import React from "react";
import Icon from "@material-ui/core/Icon";
import { NavLink } from "react-router-dom";
import classes from "./NotificationItem.module.css";
const notificationItem = props => {
  const classArray = [classes.NotificationItem];
  if (props.addClass) {
    classArray.push(props.addClass);
  }
  return (
    <div className={classArray}>
      <NavLink className={classes.Link} to={props.link}>
        <Icon>{props.children}</Icon>
        {props.hasCircle ? <div className={classes.Circle} /> : null}
      </NavLink>
    </div>
  );
};
export default notificationItem;
