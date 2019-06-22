import React from "react";
import NotificationItem from "./NotificationItem/NotificationItem";
import PersonPhoto from "../../Person/PersonPhoto/PersonPhoto";
import Photo from "../../../assets/photo.png";
import classes from "./NotificationItems.module.css";
import Hidden from "@material-ui/core/Hidden";
const notificationItems = props => {
  const notificationList = ["add", "message", "add_alert"].map(notification => {
    return (
      <NotificationItem key={notification}>{notification}</NotificationItem>
    );
  });
  return (
    <div className={classes.NotificationItems}>
      {notificationList}
      <Hidden smDown>
        <PersonPhoto circle image={Photo} alt={props.alt} />
      </Hidden>
    </div>
  );
};
export default notificationItems;
