import React from "react";
import Icon from "@material-ui/core/Icon";
import classes from "./NotificationItem.module.css";
const notificationItem = props => {
  const classArray = [classes.NotificationItem];
  if (props.addClass) {
    classArray.push(props.addClass);
  }
  return (
    <div className={classArray}>
      <Icon>{props.children}</Icon>
    </div>
  );
};
export default notificationItem;
