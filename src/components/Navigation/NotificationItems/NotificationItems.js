import React from "react";
import NotificationItem from "./NotificationItem/NotificationItem";
import PersonPhoto from "../../Person/PersonPhoto/PersonPhoto";
import PersonCorner from "../../Person/PersonCorner/PersonCorner";
import classes from "./NotificationItems.module.css";
import Hidden from "@material-ui/core/Hidden";
const notificationItems = props => {
  const notificationList = [
    { name: "add", link: "/add", hasCircle: false },
    { name: "message", link: "/messages", hasCircle: true },
    { name: "add_alert", link: "/notifications", hasCircle: true }
  ].map(notification => {
    return (
      <NotificationItem
        key={notification.name}
        hasCircle={notification.hasCircle}
        link={notification.link}
      >
        {notification.name}
      </NotificationItem>
    );
  });
  return (
    <div className={classes.NotificationItems}>
      {notificationList}
      <Hidden smDown>
        <div className={classes.PersonDropdown}>
          <PersonPhoto
            clicked={props.clicked}
            circle
            profile={props.profile}
            loading={props.loading}
          />
          {props.show ? <PersonCorner /> : null}
        </div>
      </Hidden>
    </div>
  );
};
export default notificationItems;
